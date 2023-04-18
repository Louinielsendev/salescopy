'use client'
import Image from 'next/image'
import menu from '../public/menu.svg'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenu() {
        console.log(showMenu)
        setShowMenu(!showMenu)
    }

    return (
        <div className='mb-10'>
            <nav className='max-w-6xl flex justify-between items-center h-16 p-6 mx-auto '>
                <Link href="/"><h1 className='font-extrabold text-xl text-themecolor md:text-2xl'>Salescopy.se</h1></Link>
                <div onClick={toggleMenu} className='bg-slate-100 rounded-full p-1 md:hidden'>
                    <Image src={menu} width={30} height={30} alt='menu' />
                </div>

                <Link className='hidden md:block' href="/om"><h2 className='font-semibold '>Hur fungerar Salescopy.se?</h2></Link>
            </nav>

            {showMenu && <div className='absolute h-52 p-6 bg-white shadow-md w-full md:hidden'>
            <Link href="/om"><h2 className='font-semibold text-sm'>Hur fungerar Salescopy.se?</h2></Link>
            </div>}
        </div>
    )
}
