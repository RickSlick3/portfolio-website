import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-40'>
            <div className='text-center font-semibold sm:flex items-center justify-between border-t-2 border-white mx-[10%] py-6'>
                <p>&copy; 2025 Richard Roberts. All Rights Reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a href='https://github.com/RickSlick3' target='_blank' className='flex items-center gap-2 font-semibold'>
                            <Image src={assets.email} alt='' className='w-6' />
                            Email
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/RickSlick3' target='_blank' className='flex items-center gap-2 font-semibold'>
                            <Image src={assets.github_white} alt='' className='w-6' />
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/roberts-richard/' target='_blank' className='flex items-center gap-2 font-semibold'>
                            <Image src={assets.linkedin} alt='' className='w-6' />
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
