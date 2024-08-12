import { XMarkIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import useBannerStore from '../zustand/store';
const Banner = () => {
  //set data
//const {setTimeLeft,timeLeft  } = useBannerStore();
  const [d,setD] = useState(null)
 

  const [timeLeft, setTimeLeft] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get');
        console.log(response.data);
       
        if(response.data){
          setD(response.data)
          setTimeLeft(response.data.timer)
        setIsVisible(response.data.isVisible)
        
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()


  },[setTimeLeft, setIsVisible])

  useEffect(() => {
    if (timeLeft > 0 && isVisible) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }else if (timeLeft == 0 && isVisible) {
      const updateVisibility = async () => {
        try {
            await axios.post('/api/toggle', {
                isVisible: false,
            });
            setIsVisible(false);
        } catch (error) {
            console.error('Failed to update banner visibility:', error);
        }
    };

    updateVisibility();
    }else if(timeLeft==-1){
      setIsVisible(true);
    }
  }, [timeLeft,setIsVisible,setTimeLeft,isVisible]);

//   useEffect(() => {
//     if (timeLeft > 0 && isVisible) {
//         const timerInterval = setInterval(() => {
//             setTimeLeft(timeLeft - 1);

//             // Optionally, you can sync the timeLeft with the backend periodically
//         }, 1000);

//         return () => clearInterval(timerInterval);
//     }
// }, [timeLeft, isVisible, setTimeLeft]);

  if (!d || !d.isVisible || !isVisible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-100 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900 ">
          <strong className="font-semibold">ManageCo 2024</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          
            <span className=' text-yellow-700'>
              {d.description}
            </span>

          
        </p>
        <Link
          to={d.link}
          className="flex-none rounded-full underline bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Go to Link now <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
       {isVisible && (
                <div className="flex flex-1 justify-end text-red-700">
                    {timeLeft > 0 && (
                        <>
                            time left: <span className=" bg-orange-400 text-white rounded-md px-1">{timeLeft}s</span>
                        </>
                    )}
                </div>
            )}

    </div>
  )
}

export default Banner
