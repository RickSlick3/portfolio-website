import { educationData, experienceData } from '@/assets/assets'
import React from 'react'

const Resume = () => {
    return (
        <div id='resume' className='w-full px-[12%] py-20 scroll-mt-20'>
            <h2 className='my-20 text-center text-5xl font-Ovo'>My Skills and Experience</h2>

            <h3 className='text-center text-2xl font-semibold font-Ovo my-5'>Work Experience</h3>
            {experienceData.map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <h4 className='mb-2 font-bold text-orange-0 whitespace-pre-wrap'>
                            {experience.year}
                        </h4>
                    </div>

                    <div className="w-full max-w-xl lg:w-3/4">
                        <h4 className='mb-2 font-semibold text-orange-0 whitespace-pre-wrap'>
                            {experience.role}  -  <span className='text-sm text-orange-2'>
                                {experience.company}
                            </span>
                        </h4>

                        <p className='mb-4 text-neutral-200'>{experience.description}</p>
                        
                        <div className="flex flex-wrap">
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-0 whitespace-nowrap hover:-translate-y-2 duration-500 cursor-pointer'>
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            ))}

            <h3 className='text-center text-2xl font-semibold font-Ovo mt-20 mb-5'>Education</h3>
            {educationData.map((education, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <h4 className='mb-2 font-semibold text-orange-0 whitespace-pre-wrap'>
                            {education.year}
                        </h4>
                    </div>

                    <div className="w-full max-w-xl lg:w-3/4">
                        <h4 className='mb-2 font-semibold text-orange-0 whitespace-pre-wrap'>
                            {education.school}
                        </h4>
                        <h4 className='mb-2 text-neutral-200 whitespace-pre-wrap'>
                            {education.degree}
                        </h4>
                        
                        <div className="flex flex-wrap">
                            {education.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-0 whitespace-nowrap hover:-translate-y-2 duration-500 cursor-pointer'>
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            ))}

        </div>
    )
}

export default Resume
