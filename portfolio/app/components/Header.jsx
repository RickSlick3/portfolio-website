import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
	return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
		<div>
			<Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
		</div>

		<h2 className='flex item-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
			Hi, I'm Richard Roberts
		</h2>

		<h1 className='text-3xl sm:text-6xl lg:text-[-66px] font-Ovo'>
			Aspiring Software Engineer
		</h1>
		{/* <p className='max-w-2xl mx-auto font-Ovo font-semibold'>
			This is my short quick description
		</p> */}

		<div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
			<a href="#contact" className='px-10 py-3 border border-white rounded-full bg-orange-1 hover:bg-orange-0 text-white flex items-center gap-2'>
				Contact Me
				<Image src={assets.right_arrow_white} alt='' className='w-4'/>
			</a>
			<a href="/RichardRoberts_resume.pdf" download className='px-10 py-3 border rounded-full bg-orange-1 hover:bg-orange-0 border-white flex items-center gap-2 font-medium'>
				My Resume
				<Image src={assets.folder} alt='' className='w-4'/>
			</a>
		</div>
    </div>
	)
}

export default Header
