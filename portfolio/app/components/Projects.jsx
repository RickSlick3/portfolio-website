import { assets, projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='w-full px-[12%] py-20 scroll-mt-20'>
            <h2 className='text-center text-5xl font-Ovo leading-tight'>
                My Project Highlights
            </h2>

            <div className='flex flex-col gap-5 my-20'>
                {projectData.map((project, index) => (
                    <div key={index} className='flex flex-col lg:flex-row gap-5 border border-4 border-white bg-white rounded-lg overflow-hidden'>
                        
                        <div className='relative w-full lg:w-1/2 h-auto min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[300px] xl:min-h-[450px]'>
                            <Image src={project.bgImage} alt={project.title} layout='fill' objectFit='cover' objectPosition="center"/>
                        </div>
                        
                        <div className='w-full lg:w-1/2 p-3 flex flex-col justify-center'>
                            <h2 className='font-Ovo font-semibold text-black font-Outfit text-2xl my-2'>
                                {project.title}
                                <p className='font-Ovo font-bold text-sm text-gray-900'>
                                    {project.skills}
                                </p>
                            </h2>
                            <p className='font-Ovo text-sm text-gray-900 my-1'>
                                {project.problem}
                            </p>
                            <p className='font-Ovo text-sm text-gray-900 my-1'>
                                {project.description}
                            </p>
                            <a href={project.link} target='_blank' className='bg-orange-1 px-4 py-2 rounded-md hover:bg-orange-0 duration-300 my-2 flex items-center justify-center gap-2 text-center'>
                                {project.cta}
                                <Image src={assets.right_arrow_white} alt='Right Arrow' className='w-4' />
                            </a>
                        </div>

                    </div>
                ))}
            </div>

            <a href='https://github.com/RickSlick3' target='_blank' className='w-max flex items-center justify-center gap-3 text-gray-700 bg-white border border-gray-700 rounded-full py-3 md:px-10 px-4 mx-auto my-20 hover:bg-orange-0 duration-500'>
                See More on GitHub
                <Image src={assets.github} alt='GitHub' className='w-8' />
            </a>
        </div>
    )
}

export default Projects
