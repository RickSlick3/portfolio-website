import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'

const navbar = () => {

	const [isScroll, setIsScroll] = useState(false)
	const sideMenuRef = useRef();

	const openMenu = () => {
		sideMenuRef.current.style.transform = 'translateX(-16rem)';
	}
	const closeMenu = () => {
		sideMenuRef.current.style.transform = 'translateX(+16rem)';
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if(scrollY > 50) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}
		})
	}, [])

	return (
    <>
		<nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
			${isScroll ? "bg-orange-1 bg-opacity-75 backdrop-blur-lg shadow-sm" : ""}`}>
			<a href="#top">
				<h2 className='block md:hidden lg:block text-5xl font-Outfit font-extrabold'>Portfolio</h2>
			</a>

			<ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-semibold text-xl
				${isScroll ? "" : "bg-orange-1 bg-opacity-75 shadow-sm"}`}>
				<li><a className='font-Ovo' href="#top">Home</a></li>
				<li><a className='font-Ovo' href="#about">About</a></li>
				{/* <li><a className='font-Ovo' href="#resume">Resume</a></li> */}
				<li><a className='font-Ovo' href="#projects">Projects</a></li>
				<li><a className='font-Ovo' href="#contact">Contact Me</a></li>
			</ul>

			<div className='flex items-centered gap-4'>

				<a href="#contact" className='hidden lg:flex item-center gap-3 px-10 py-2.5 bg-orange-1 hover:bg-orange-0 border border-white rounded-full ml-4 font-bold font-Ovo'>
					Contact 
				</a>

				<button className='block md:hidden ml-3' onClick={openMenu}>
					<Image src={assets.menu_white} alt='' className='w-6' />
				</button>
			</div>

			{/* Mobile Menu */}

			<ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-orange-1 transition duration-500 font-bold text-2xl'>
				
				<div className='absolute right-6 top-6' onClick={closeMenu}>
					<Image src={assets.close_white} alt='' className='w-5 cursor-pointer' />
				</div>
				
				<li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
				<li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
				{/* <li><a className='font-Ovo' onClick={closeMenu} href="#resume">Resume</a></li> */}
				<li><a className='font-Ovo' onClick={closeMenu} href="#projects">Projects</a></li>
				<li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
			</ul>

		</nav>
    </>
	)
}

export default navbar
