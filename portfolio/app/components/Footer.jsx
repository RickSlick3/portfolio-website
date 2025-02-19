import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'

const Footer = () => {

    const [alertMessage, setAlertMessage] = useState("");
    const email = "roberts.richard.fr@gmail.com";

    const copyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(email);
            setAlertMessage("Email copied to clipboard!");
            setTimeout(() => setAlertMessage(""), 3000);
        } catch (e) {
            console.error("Failed to copy email: ", e);
            setAlertMessage("Failed to copy email.");
            setTimeout(() => setAlertMessage(""), 3000);
        }
    }, [email]);

    return (
        <div className='mt-40'>
            <div className='text-center font-semibold sm:flex items-center justify-between border-t-2 border-white mx-[10%] py-6'>
                <p>&copy; 2025 Richard Roberts. All Rights Reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <button onClick={copyEmail} className='flex items-center gap-2 font-semibold text-white'>
                            <Image src={assets.email} alt='' className='w-6' />
                            Email
                        </button>
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
                    <li>
                        <a href="/RichardRoberts_resume.pdf" download className='flex items-center gap-2 font-semibold'>
                            <Image src={assets.folder} alt='' className='w-6' />
                            Resume
                        </a>
                    </li>
                </ul>

                {alertMessage && (
                    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-white transition-opacity duration-500 ${
                        alertMessage.includes("Failed") ? "bg-red-500" : "bg-green-500"}`}>
                        {alertMessage}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Footer
