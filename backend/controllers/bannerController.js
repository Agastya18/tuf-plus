import { prisma } from "../db/prisma.js";
export const createBanner = async(req,res) =>{

    const {bannerData,link} = req.body;

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
                    link : link || existingBanner.link
                }
            });

        }else{
             banner = await prisma.banner.create({
                data:{
                    description: bannerData,
                    link
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