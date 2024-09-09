import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies";
import BentoGrid from "./components/BentoGrid";
import { motion } from "framer-motion"
import GetInTouch from "./components/GetInTouch";
import slider from "react-slick/lib/slider";
// import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'



// import Carousel from "./components/ui/apple-cards-carousel"

// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const App = () => {
  return (
    // dotted background and navbar
    
    <div className="overflow-x-hidden text-neutral-300 antialiased bg-[#0b0b0b] bg-[radial-gradient(#ffffff33_1px,#0E1011_1px)] bg-[size:70px_70px]">
      <div className="flixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-full w-screen "></div>
  
      <div className="container mx-auto px-10">
        
        <Navbar />
        <Hero />
        {/* add about section */}
        {/* <Technologies /> */}
        
        <BentoGrid className='drop-shadow-2xl'/>

        <GetInTouch />
      </div>

    </div>
  )
}

export default App
