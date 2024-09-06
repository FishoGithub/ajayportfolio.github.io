import React from 'react'
import { motion } from 'framer-motion'

const GetInTouch = () => {
  return (
    <div className='pt-20 pb-20 text-center'>
      <motion.a 
        initial={{x: -20, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1, delay: 0.7, type: "spring"}}
        href="https://www.linkedin.com/in/ajaymajgaonkar/"
        target='_blank' 
        className='leading-snug tracking-tight lg:mt-16 font-extrabold text-5xl cursor-pointer hover:to-blue-400'>get in touch ‎ ‎ ‎🤙
      </motion.a>
    </div>
  )
}

export default GetInTouch
