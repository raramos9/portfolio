import React from 'react'
import { useState, useEffect, useRef} from 'react'

const Header = () => { 
    const [isSticky, setIsSticky] = useState(false);
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => { 
        const currentCount = localStorage.getItem('visitCount');
        // if current count exists
        if(currentCount){
            // translate it into an integer and increment
            const newCount = parseInt(currentCount) + 1;
            // update our state to newCount and set visit count in local storage
            setVisitCount(newCount)
            localStorage.setItem('visitCount', newCount)
        }
        else { 
            // otherwise keep it as 1 
            setVisitCount(1)
            localStorage.setItem('visitCount', 1)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => { 
        if (window.scrollY > 0) { 
            setIsSticky(true);
        }
        else { 
            setIsSticky(false);
        }
    }

    return ( 
        <section className={`py-10 z-50 bg-gradient-to-b saturate-200 from-zinc-900 via-zinc-900 to-zinc-900/5 ${isSticky ? 'sticky top-0':''}`}> 
            <div className="mx-auto max-w-screen-md px-6">
                <div className="flex flex-nowrap items-center justify-between"> 
                    <a href="#"> Home </a>
                    <nav className="flex flex-nowrap justify-between"> 
                        <a href='/' className='px-2 py-0.5 transition-colors duration-300 hover:text-white hover:bg-white/15 rounded-md text-[#d4d4d8af]'> about </a>
                        <a href='/'className='px-2 py-0.5 transition-colors duration-300 hover:text-white hover:bg-white/15 rounded-md text-[#d4d4d8af]'> work </a>
                        <a href='/' className='px-2 py-0.5 transition-colors duration-300 hover:text-white hover:bg-white/15 rounded-md text-[#d4d4d8af]'> projects </a>
                        <p className='px-2 py-0.5'> {visitCount} </p>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Header