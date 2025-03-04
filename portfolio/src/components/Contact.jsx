import React from 'react'

const Contact = () => { 
    return(
        <div className="flex flex-col py-5 gap-5">
            <p className="font-semibold text-2xl mb-5"> get in touch! </p>
            <p className="text-[#d4d4d8af]"> 
                If you have any questions, or just want to reach out you can contact me at: 
            </p>
            <a 
                href="mailto:rramos99@berkley.edu"
                className="hover:underline hover:text-blue-50"
                >
                <p className="font-semibold text-white"> 
                    rramos99@berkeley.edu
                </p>
            </a>
        </div>
    )
}

export default Contact