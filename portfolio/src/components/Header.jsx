import React from 'react'
import { navigation } from '../constants';
import { Link, useLocation } from 'react-router-dom'

const Header = () => { 
    const pathName = useLocation();
    return ( 
        <section className='fixed top-0 left-0 right-0 h-auto py-10 z-50'> 
            <div className="mx-auto max-w-screen-md px-6">
                <div className="flex flex-nowrap items-center justify-between"> 
                    <nav className="flex flex-nowrap justify-between gap-5"> 
                        {/* 'px-2 py-0.5 transition-colors duration-300 hover:text-white hover:bg-white/15 rounded-md text-[#d4d4d8af]' */}
                        {navigation.map((item) => (
                            <Link key={item.id} 
                                to={item.url} 
                                className={`transition-colors duration-300 hover:text-white text-[#d4d4d8af] ${item.url === pathName.pathname ? 'transition duration-300 text-white' : ''}`}
                            >
                                {item.title}
                            </Link>
                        ))} 
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Header