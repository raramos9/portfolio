import React from 'react'

const Experience = () => { 
    return ( 
       <section className="py-5">
            <div className="flex flex-nowrap items-center justify-between"> 
                <p className="font-semibold"> Experience </p>
                <a href="/" className="text-[#d4d4d8af] text-sm transition-colors duration-300 hover:text-white"> See all experience </a> 
            </div>
            <ul className="flex flex-col my-5"> 
                <li className="font-semibold"> WebAI </li>
                <li className="text-sm text-[#d4d4d8af]"> Software Engineer </li>
                <li className="text-sm text-[#d4d4d8af]"> January 2025 - Present </li>
            </ul> 
            <p className="text-[#d4d4d8af]"> Contract work. </p>
       </section> 
    )
}

export default Experience 