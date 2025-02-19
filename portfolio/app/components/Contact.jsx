import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'

const Contact = () => {

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
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl font-Ovo'>
                Connect With Me
            </h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-2xl font-Ovo'>
                Always open to meaningful connections! Feel free to reach out if you'd like to connect.
            </p>

            <div className='flex justify-center items-center gap-10'>
                <button onClick={copyEmail}>
                    <Image src={assets.email} alt='email' className='w-20 hover:-translate-y-1 duration-500' />
                </button>
                <a href='https://www.linkedin.com/in/roberts-richard/' target='_blank'>
                    <Image src={assets.linkedin} alt='linkedin' className='w-20 hover:-translate-y-1 duration-500' />
                </a>
            </div>

            {alertMessage && (
                <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-white transition-opacity duration-500 ${
                    alertMessage.includes("Failed") ? "bg-red-500" : "bg-green-500"}`}>
                    {alertMessage}
                </div>
            )}
        </div>
    )
}

export default Contact
