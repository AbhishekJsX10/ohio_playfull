import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion"


const Landing = () => {
    
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full  bg-zinc-900 pt-1'>
        <div className="text-structure mt-20 px-20 ">

            {
                ["WE CREATE","EYE-OPENING","PRESENTATION"].map((item,index)=>{
                    return(
                        <div className='masker' key={index}>
                            <div className='w-fit flex items-start sm:items-center'>
                                {index===1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1,delay:0.9}} className=' w-[18vw]  h-[10vw] sm:h-[5vw]  sm:w-[9vw]'><img className="h-full w-full object-cover rounded-xl" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>}
                                <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] leading-[10vw] sm:leading-[8vw] md:leading-[7vw] -tracking-[0.23rem] font-semibold font-mono ">{item}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-24 flex justify-between py-5 px-16'>
            {
                ["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
                    return <p className='text-md hidden md:block tracking-tight font-light leading-none'key={index}>{item}</p>
                })
            }
            <div className=' start flex items-center gap-2 -mt-1'>
                <div className='border-zinc-500 font-normal px-3 py-1 border-[1px] text-[0.6rem] sm:text-sm uppercase rounded-full hover:bg-white hover:text-black transition-all'>
                    Start the Project
                </div>
                <div className='w-5 h-5 sm:w-7 sm:h-7 flex items-center  border-[1px] border-zinc-500 justify-center rounded-full hover:bg-white hover:text-black transition-all '>
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing