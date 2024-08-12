import { prisma } from "../db/prisma.js";
export const createBanner = async(req,res) =>{

    const {bannerData,link,isVisible,timer} = req.body;

    try {
        
        const existingBanner = await prisma.banner.findFirst();
        let banner
        if(existingBanner){
            banner = await prisma.banner.update({
                where:{
                    id:existingBanner.id
                },
                data:{
                    description: bannerData || existingBanner.description,
                    link : link || existingBanner.link,
                    isVisible: isVisible || existingBanner.isVisible,
                    timer: parseInt(timer ) || existingBanner.timer

                }
            });

        }else{
             banner = await prisma.banner.create({
                data:{
                    description: bannerData,
                    link,
                    isVisible,
                    timer: parseInt(timer) || existingBanner.timer
                    
                }
            });

        }

        

        res.json(banner);

    
        
    } catch (error) {
        
        console.log(error);
    }

}

export const getBanner = async(req,res) =>{
    try {
        const banner = await prisma.banner.findFirst();
        res.json(banner);
    } catch (error) {
        console.log(error);
    }
}


export const createToggleBanner = async(req,res) =>{

    const {isVisible,timer} = req.body;
    //console.log(isVisible)

    try {
        
        const existingBanner = await prisma.banner.findFirst();
        let banner
        if(existingBanner){
            banner = await prisma.banner.update({
                where:{
                    id:existingBanner.id
                },
                data:{
                    isVisible,
                    timer: parseInt(timer) || -1
                   
                }
            });

        }else{
             banner = await prisma.banner.create({
                data:{
                    isVisible,
                    timer: parseInt(timer) || -1
                
                    
                }
            });

        }

        

        res.json(banner);

    
        
    } catch (error) {
        
        console.log(error);
    }
}