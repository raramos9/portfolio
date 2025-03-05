import React from 'react'

const Experience = () => { 
    return ( 
       <section className="py-5">
            <div className="flex flex-nowrap items-center justify-between"> 
                <p className="font-semibold mb-5 text-2xl"> my experience </p>
            </div>
            
            <ol className='text-[#d4d4d8af]'> 
                <li> Languages: Python, C++, Javascript, SQL, Matlab </li> 
                <li> Tools & Frameworks: Pytorch, Tensorflow, Pandas, NumPy, React, Tailwind </li>
            </ol>

            <ul className="flex flex-col mt-5"> 
                <li className="font-semibold"> WebAI </li>
                <li className="text-sm text-[#d4d4d8af]"> Software Engineer </li>
                <li className="text-sm text-[#d4d4d8af]"> January 2025 - Present </li>
            </ul> 
            <p className="text-[#d4d4d8af] mt-5"> Contract work. </p>

            <ul className="flex flex-col mt-10">
                <li className="font-semibold"> Project Bracket </li>
                <li className="text-sm text-[#d4d4d8af]"> President </li>
                <li className="text-sm text-[#d4d4d8af]"> May 2023 - December 2023 </li>
            </ul>
            <p className="text-[#d4d4d8af] mt-5"> Managed over 50 members, broken into 6 development teams dedicated to projects in ML, Web Development, and Game Development </p>

            <ul className="flex flex-col mt-10"> 
                <li className="font-semibold"> Project Bracket </li>
                <li className="text-sm text-[#d4d4d8af]"> Project Manager </li>
                <li className="text-sm text-[#d4d4d8af]"> January 2023 - May 2023 </li>
            </ul> 
            <p className="text-[#d4d4d8af] mt-5"> Led a 16-week project with a team of 6 developers to deliver an ML/AI facial expression detection system. Facilitated weekly meetings, providing oversight and training on OpenCV and TensorFlow. </p>

       </section> 
    )
}

export default Experience 