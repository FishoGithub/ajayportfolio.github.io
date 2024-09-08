import React from 'react'
import { motion } from 'framer-motion'
import AmazonCard from './AmazonCard'
// import Card from './Card'
import AutoPlay from './AutoCarousel'
import Slider from 'react-slick/lib/slider'
import { FlipWords } from './flip-words'
import CustomizedTimeline from './WorkTimeline'
import Typewriter from './Typewriter'
import TypeWriterEffect from 'react-typewriter-effect';


const BentoGrid = () => {

    const images = [
        "/src/assets/carousel/aws_logo.png",
        "/src/assets/carousel/azure.png",
        "/src/assets/carousel/Firebase_Logo.png",
        "/src/assets/carousel/JavaScript-logo.png",
        "/src/assets/carousel/python-5-logo-png-transparent.png",
        "/src/assets/carousel/scrumlogo.png",
    ]

  return (

    <motion.div 
    initial={{opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration: 2, delay: 1, type: "spring"}} 
    className='flex h-screen w-full items-center justify-center py-40 border-b border-neutral-900'>
      <motion.div className='grid h-full w-full grid-cols-10 grid-rows-4 gap-5' transition={{delay:1}}>
        <div className='col-span-3 row-span-4  rounded-3xl flex justify-center items-center bg-zinc-800'>
            <div className='justify-center'>
            </div>

            <div>
                <CustomizedTimeline className='drop-shadow-2xl '/>
            </div>

        </div>
        <div className='transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0 drop-shadow-2xl col-span-3 row-span-2 rounded-3xl flex justify-center items-center bg-gradient-to-r from-blue-500 from-500% via-blue-500 via-30% to-indigo-600 to-90%'>
            {/* flip-word component */}
            <div className='position: absolute mt-auto mb-auto object-contain px-10 lg:text-xl'>
                <p className='text-gray-200'><a className='leading-snug tracking-tight font-extrabold'>I'm Ajay,</a> a<FlipWords 
                    words={['Developer', 'Engineer', 'Innovator']}
                    className='leading-snug tracking-tight font-extrabold'
                ></FlipWords>who's passionate about software development and leading successful teams. </p>
                <p>‎</p>
                <p className='font-extrabold'>I consistently deliver high-quality results and successfully execute customer visions.</p>
            </div>
            
        </div>
        <div className='transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0 drop-shadow-2xl col-span-4 row-span-2 rounded-3xl flex flex-col  justify-center items-center bg-gradient-to-r from-yellow-400 from-500% via-orange-400 via-30% to-red-500 to-90%'>
            <img src="/src/assets/iphone_15.webp" className='w-full object-contain min-h-0 mt-auto pt-3 drop-shadow-xl'/>

        </div>
        <div className='transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0 drop-shadow-2xl col-span-3 row-span-1 bg-zinc-800 rounded-3xl flex flex-col justify-center text-center bg-gradient-to-r from-lime-300 from-500% via-yellow-3 via-30% to-yellow-300 to-90%'>
            <h1 className='mt-auto mb-auto text-center w-full object-contain leading-snug tracking-tight font-extrabold lg:text-xl md:text-xl 2xl:text-3xl text-black py-10 px-5'>
                <TypeWriterEffect
                    startDelay={1000}
                    cursorColor="black"
                    typeSpeed={100}
                    multiText = {[
                        '20 years of development experience',
                        '20 years of development experience'
                    ]}
                    multiTextDelay={1000}
                    multiTextLoop = {true}
                    className='text-center'
                    
                />
            </h1>
        </div>
        {/* <div className='drop-shadow-2xl col-span-2 row-span-2 bg-zinc-800 rounded-3xl flex justify-center items-center bg-gradient-to-r from-blue-600 from-10% via-blue-600 via-30% to-blue-800 to-90%'>
            section 5
        </div> */}

        <div className='transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0 drop-shadow-2xl col-span-4 row-span-2 rounded-3xl flex justify-center items-center bg-gradient-to-r from-purple-500 from-1000% via-purple-500 via-30% to-pink-500 to-100%'>
            {/* technologies section */}
            
            <div>
                technologies
            </div>

        </div>
        <div className='drop-shadow-2xl col-span-3 row-span-1 bg-zinc-800 rounded-3xl flex flex-col justify-center items-center'>
            {/* make this change to just text when the screen is lg/xl */}
            {/* <img src='/src/assets/seattle.webp' className='w-full object-contain min-h-0 mt-auto drop-shadow-xl px-5 py-5 rounded-3xl'></img> */}
            <h1 className=' mt-auto mb-auto text-center w-full object-contain leading-snug tracking-tight font-extrabold lg:text-xl md:text-xl 2xl:text-3xl py-10 px-5'>
                {/* fix this later */}
                📍 ‎ ‎Seattle, Washington
            </h1>
        </div>
      </motion.div>
    </motion.div>
  )
}

{/* <div className='px-5 py-5 grid h-full w-full grid-cols-10 grid-rows-16ß gap-5'>
                <div className='col-span-5 row-span-3 bg-gradient-to-r bg-orange-600 rounded-3xl flex justify-center items-center'>
                        <img src="/src/assets/amazon.png" className='px-10 -mt-20 pb-5 drop-shadow-xl'/>
                        <div>
                        </div>
                </div>
                <div className='col-span-5 row-span-3 bg-zinc-800 rounded-3xl flex justify-center items-center'>
                </div>
                <div className='col-span-5 row-span-3 bg-zinc-800 rounded-3xl flex justify-center items-center'>
                </div>
                <div className='col-span-5 row-span-3 bg-red-500 rounded-3xl flex justify-center items-center'>
                    <img src="/src/assets/nordstrom-logo-1.png" className='px-10 -mt-20 pb-5 drop-shadow-xl'/>
                </div>
                <div className='col-span-5 row-span-3 bg-red-500 rounded-3xl flex justify-center items-center'>
                </div>
                <div className='col-span-5 row-span-3 bg-zinc-800 rounded-3xl flex justify-center items-center'>
                </div>


            </div> */}

export default BentoGrid
