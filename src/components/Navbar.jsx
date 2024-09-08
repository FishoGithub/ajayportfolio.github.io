
// import tempLogo from "../assets/sahf_logo_transparent.webp"
import ajayLogo from "../assets/ajay_icon.PNG"
import linkedinIcon from "../assets/lk_icon.png"
import githubLogo from "../assets/github.png"
import emailIcon from "../assets/mail_icon.png"

const Navbar = () => {
   return (
    
     <nav className="mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
        {/* object-scale-down h-20 w-90 */}
            <a href="."><img src={ajayLogo} alt="sahf temporary logo placeholder" className="ms-auto w-16"/></a>
            <div className="m-8 flex items-center justify-center text-2xl gap-5">

                <a href='https://github.com/ajaymajgaonkar' target="_blank"><img src={githubLogo} className="flex mx-2 w-11 items-end hover:bg-zinc-800 rounded-3xl"/></a>
                <a href='https://www.linkedin.com/in/ajaymajgaonkar/' target="_blank"><img src={linkedinIcon} className="flex mx-2 w-10 items-end hover:bg-zinc-800"/></a>
            </div>

        </div>
        <div>

        </div>
     </nav>
   )
 }
 
 export default Navbar
 