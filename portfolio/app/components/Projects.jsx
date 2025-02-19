import { assets, projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='w-full px-[12%] py-20 scroll-mt-20'>
            <h2 className='text-center text-5xl font-Ovo'>
                My Latest Projects
            </h2>

            {/* <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                This is a paragraph about my projects
            </p> */}

            <div className='grid grid-cols-auto my-20 gap-5'>
                
                {projectData.map((project, index) => (
                    <div key={index} style={{backgroundImage: `url(${project.bgImage})`}} 
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg border-2 border-white relative cursor-pointer group'>
                        <a href={project.link}  target='_blank' className='bg-orange-1 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold text-black font-Outfit'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
                
            </div>

            <a href='https://github.com/RickSlick3' target='_blank' 
                className='w-max flex items-center justify-center gap-4 text-gray-700 bg-white border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-orange-0 duration-500'>
                See More on GitHub
                <Image src={assets.github} alt='right arrow' className='w-6'/>
            </a>
        </div>
    )
}

export default Projects
