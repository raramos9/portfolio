import React from 'react'
import { useState, useEffect } from 'react'

const Header = () => { 
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => { 
        if (window.scrollY > 50) { 
            setIsSticky(true);
        }
        else { 
            setIsSticky(False);
        }
    }

    return ( 
        <div className={`py-5 z-50 bg-gradient-b backdrop-blur-sm saturate-200 ${isSticky ? 'sticky top-0':''}`}> 
            <div className="mx-auto max-w-screen-md px-6">
                <div className="flex flex-nowrap items-center justify-between"> 
                    Home
                    <nav className="flex flex-nowrap justify-between"> 
                        <a href='/' className='px-2 py-0.5 transition-colors duration-300 hover:text-white hover:bg-white/15 rounded-md text-[#d4d4d8af]'> about </a>
                        <a href='/'className='px-2 py-0.5 transition-colors duration-300 hover:text-white hover:bg-white/15 rounded-md text-[#d4d4d8af]'> work </a>
                        <a href='/' className='px-2 py-0.5 transition-colors duration-300 hover:text-white hover:bg-white/15 rounded-md text-[#d4d4d8af]'> projects </a> 
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header