import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  const marqueeTexts = ["We are ochi", "We are ochi", "We are ochi", "We are ochi"];
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className=' w=full py-5 sm:py-10 rounded-2xl bg-[#004D43] overflow-hidden'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap'>
          {
            marqueeTexts.map((ele,index)=>{
              return <motion.h1 key={index} initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className=' pr-10 text-[10.8vw] leading-none tracking-tighter font-bold uppercase pb-2 sm:pb-5'>{ele}</motion.h1>
            })
          }
        </div>
    </div>
  )
}

export default Marquee

