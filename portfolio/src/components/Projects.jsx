import React from 'react'

const Projects = () => { 
    return (
        <section className="py-30">
            <div className="flex flex-nowrap items-center justify-between">
                <p className="font-semibold"> Projects </p>
            </div>
            <ul className="flex flex-col mt-5">
                <li className="font-semibold"> Cloud Resume Challenge </li>
                <li className="text-sm text-[#d4d4d8af]">  React, Tailwind, AWS </li>
            </ul>
            <p className="py-5 text-[#d4d4d8af]"> In progress! </p>
        </section>
    ) 
}

export default Projects