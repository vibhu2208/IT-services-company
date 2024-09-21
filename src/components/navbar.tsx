'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { IoMenuSharp } from 'react-icons/io5'
const Navbar = () => {
    const pathname = usePathname();
    const [menuStatus, setMenuStatus] = useState(false);
    return (
        <header className='sticky top-0 z-[10001] bg-white border-b-[1px] border-gray-300 shadow'>
            <nav className='flex justify-between items-center py-1 px-4 max-w-6xl mx-auto'>
                <div className='text-[#1A1F65]'>
                    <Link href="/" className='text-2xl font-bold'>
                        <Image src={"/images/logo.png"} width={150} height={50} alt='logo' />
                    </Link>
                </div>
                <div className='md:hidden block text-4xl' onClick={() => setMenuStatus((pre) => (!pre))}>
                    <IoMenuSharp />
                </div>
                <div className='md:flex gap-6 hidden'>
                    <div className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/" ? "text-[#1A1F65]" : ""}`}>
                        <Link href={"/"} className='text-nowrap'>
                            Home
                        </Link>
                    </div>
                    <div className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/about-us" ? "text-[#1A1F65]" : ""}`}>
                        <Link href={"/about-us"} className='text-nowrap'>
                        About Us
                        </Link>
                    </div>
                    <div className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/services" ? "text-[#1A1F65]" : ""}`}>
                        <Link href={"/services"} className='text-nowrap'>
                            Services
                        </Link>
                    </div>
                    <Link href={"/contact-us"}>
                        <div className='px-2 w-fit text-nowrap py-1 my-1 mx-1 cursor-pointer font-semibold bg-sky-800 hover:bg-sky-700 transition-all text-white rounded-2xl shadow-lg'>Contact Us</div>
                    </Link>
                </div>
            </nav>
            {menuStatus && <div className={`flex ps-10 gap-3 flex-col md:hidden border-t absolute bg-white w-full transition-all`}>
                <div onClick={() => setMenuStatus(false)} className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/" ? "text-[#1A1F65]" : ""}`}>
                    <Link href={"/"} className='text-nowrap'>
                        Home
                    </Link>
                </div>
                <div onClick={() => setMenuStatus(false)} className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/about-us" ? "text-[#1A1F65]" : ""}`}>
                    <Link href={"/about-us"} className='text-nowrap'>
                    About Us
                    </Link>
                </div>
                <div onClick={() => setMenuStatus(false)} className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/services" ? "text-[#1A1F65]" : ""}`}>
                    <Link href={"/services"} className='text-nowrap'>
                        Services
                    </Link>
                </div>
                <div onClick={() => setMenuStatus(false)} className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/contact-us" ? "text-[#1A1F65]" : ""}`}>
                    <Link href={"/contact-us"} className='text-nowrap'>
                        Contact Us
                    </Link>
                </div>
            </div>}
        </header>
    )
}

export default Navbar
