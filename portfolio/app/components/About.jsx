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

                        {/* <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                            {infoList.map(({icon, title, description}, index) => (
                                <li key={index} className='border-[0.5px] border-white rounded-xl p-4 cursor-pointer bg-white hover:bg-orange-0 hover:-translate-y-1 duration-500 hover:shadow-white'>
                                    <Image src={icon} alt={title} className='w-7 mt-3'/>
                                    <h3 className='my-4 font-bold text-gray-600 text-sm'>{title}</h3>
                                    <p className='text-gray-600 font-semibold whitespace-pre-wrap'>{description}</p>
                                </li>
                            ))}
                        </ul> */}

                        <h3 className='my-6 font-Ovo text-xl font-semibold'>
                            Top Skills
                        </h3>
                        <ul className='flex items-ceter gap-3 sm:gap-5'>
                            {skillsData.map((skill, index) => (
                                <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square bg-white rounded-lg cursor-pointer hover:bg-orange-0 hover:-translate-y-1 duration-500 hover:shadow-white'>
                                    <Image src={skill} alt='Tool' className='w-7 sm:w-10' />
                                </li>
                            ))}
                        </ul>

                        <h3 className='my-6 font-Ovo text-xl font-semibold'>
                            Tools I Use
                        </h3>
                        <ul className='flex items-ceter gap-3 sm:gap-5'>
                            {toolsData.map((tool, index) => (
                                <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square bg-white rounded-lg cursor-pointer hover:bg-orange-0 hover:-translate-y-1 duration-500 hover:shadow-white'>
                                    <Image src={tool} alt='Tool' className='w-7 sm:w-10' />
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
