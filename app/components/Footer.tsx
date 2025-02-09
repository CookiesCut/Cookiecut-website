import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-amber-800 pt-20'>
        <section className='flex justify-between items-center mx-2 px-4 py-20 bg-[#E0D8CB] rounded-t-[50px]'>
            <div className='flex gap-20 text-sm font-bold'>
                <ul className='flex flex-col gap-4'>
                    <li className='text-amber-500 hover:text-amber-400'>
                        <Link href={"https://www.youtube.com/@CookiesCut"} target='_blank'>Youtube</Link>
                    </li>
                    <li className='text-amber-500 hover:text-amber-400'>
                        <Link href={"https://t.me/CookieCuts"} target='_blank'>Telegram</Link>
                    </li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <li className='text-amber-500 hover:text-amber-400'>
                        <Link href={"/"}>Website</Link>
                    </li>
                    <li className='text-amber-500 hover:text-amber-400'>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li className='text-amber-500 hover:text-amber-400'>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Image 
                    src={"/cookieCut-Logo.jpg"}
                    alt='Logo'
                    width={80}
                    height={80}
                    className='rounded-full md:w-32'
                    />
            </div>
        </section>
        <section className='bg-[#E0D8CB] mx-2'>
            <hr className='text-amber-700 bg-amber-700 h-0.5 mx-5'/>
            <p className='mx-5 py-7 text-amber-950 hover:text-amber-600'>© 2025 CookieCut. All rights reserved.</p>
        </section>
    </footer>
  )
}
