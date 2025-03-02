import React from 'react'

const Projects = () => { 
    return (
        <section className="py-10">
            <div className="flex flex-nowrap items-center justify-between">
                <p className="font-semibold"> Projects </p>
                <a className="text-sm text-[#d4d4d8af] duration-300 hover:text-white"> See all projects </a>
            </div> 
            <p className="font-semibold py-5"> Cloud Resume Challenge </p>
            <p className="text-sm text-[#d4d4d8af]"> React, Tailwind, AWS </p>
            <p className="py-5 text-sm text-[#d4d4d8af]"> In progress! </p>
        </section>
    ) 
}

export default Projects