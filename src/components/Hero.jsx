import React from 'react'
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='w-full lg:w-1/2'>
            <div className='w-full '>
                <div className='flex flex-col items-center lg:items-start font-extrabold text-5xl'>

                    <motion.h1 
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 0.3, type: "spring", stiffness: 200}}
                        className='drop-shadow-xl leading-snug tracking-tight lg:mt-16 '>hey, i'm ajay ‎ ‎ ‎👋
                        </motion.h1>
                    <motion.h1 
                        initial={{x: -10, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 0.7, type: "spring"}} 
                        className='leading-snug pb-16 tracking-tight'>software development manager @ <a href='https://www.amazon.com/' target='_blank' className='text-orange-400'>amazon</a></motion.h1>
                        
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Hero
