import React from 'react'
import { LuInstagram, LuGithub } from "react-icons/lu";
import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => { 
    return( 
        <div className="flex flex-nowrap items-center justify-between mt-10 mb-5">
            <p className="text-[#d4d4d8af] text-sm"> © 2025 Andre Ramos</p>
            <div className="flex flex-nowrap justify-between">
                <div className="px-2 py-0.5 flex items-center"> 
                    <a
                        href="https://www.instagram.com/andrre.r/?hl=en"
                        target="_blank"
                        rel="noopener"
                        className="text-[#d4d4d8af] hover:text-white transition duration-300"
                    >
                        <LuInstagram />
                    </a>
                </div>
                <div className="px-2 py-0.5 flex items-center">
                    <a
                        href="https://github.com/raramos9"
                        target="_blank"
                        rel="noopener"
                        className="text-[#d4d4d8af] hover:text-white transition duration-300"
                    >
                        <LuGithub />
                    </a>
                </div>
                <div className="px-2 py-0.5 flex items-center"> 
                    <a
                        href="https://www.linkedin.com/in/andre-ramos-29bb4926b/"
                        target="_blank"
                        rel="noopener"
                        className="text-[#d4d4d8af] hover:text-white transition duration-300"
                    >
                        <AiFillLinkedin />
                    </a>
                </div>
            </div>
        </div> 
    )
}

export default Footer