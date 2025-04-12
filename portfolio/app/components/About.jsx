import { assets, infoList, summary, toolsData, skillsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-20 scroll-mt-20'>
            <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

            <div className='container mx-auto px-4'>
                <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                    <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
                    </div>

                    <div className='flex-1'>
                        <p className='mb-10 mx-w-2xl font-Ovo text-xl font-semibold whitespace-pre-wrap'>
                            {summary}
                        </p>

                        <h3 className='my-6 font-Ovo text-xl font-semibold'>
                            Top Skills
                        </h3>
                        <ul className='flex items-center flex-wrap md:flex-nowrap justify-between gap-5 sm:justify-start'>
                            {skillsData.map((skill, index) => (
                                <li key={index} className='flex flex-col items-center w-1/4 sm:w-14'>
                                    <div className='flex items-center justify-center w-full sm:w-14 aspect-square bg-white rounded-lg cursor-pointer hover:bg-orange-0 hover:-translate-y-1 duration-500 hover:shadow-white'>
                                        <Image src={skill.icon} alt='Tool' className='w-3/4 sm:w-10' />
                                    </div>
                                    <p className='leading-[2] text-[14px] sm:text-[12px]'>{skill.name}</p>
                                </li>
                            ))}
                        </ul>

                        <h3 className='my-6 font-Ovo text-xl font-semibold'>
                            Tools I Use
                        </h3>
                        <ul className='flex items-center flex-wrap md:flex-nowrap justify-between gap-5 sm:justify-start'>
                            {toolsData.map((tool, index) => (
                                <li key={index} className='flex flex-col items-center w-1/4 sm:w-14'>
                                    <div className='flex items-center justify-center w-full sm:w-14 aspect-square bg-white rounded-lg cursor-pointer hover:bg-orange-0 hover:-translate-y-1 duration-500 hover:shadow-white'>
                                        <Image src={tool.icon} alt='Tool' className='w-3/4 sm:w-10' />
                                    </div>
                                    <p className='leading-[2] text-[14px] sm:text-[12px]'>{tool.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
