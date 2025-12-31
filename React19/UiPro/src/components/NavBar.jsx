import React from 'react'
import { Menu, X, Search, Home, Info, Briefcase, Phone, LogIn } from "lucide-react"
import Navitem from './nav  components/Navitem'
import { useState } from 'react';
import MobileNavitem from './nav  components/MobileNavitem';


function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-white shadow-md fixed w-full z-50 '>
            <div className='max-2-7xl mx-auto px-4'>
                <div className=' flex justify-between items-center h-16' >
                    <div className=' text-2xl font- bold text-blue-600'>MYAPP</div>
                    {/* search bar */}
                    <div className=' relative hidden md:flex'>
                        <Search className=' absolute left-3 top-2.5 gray-400' size={18} />
                        <input
                            type='text'
                            placeholder='Search.....'
                            className=' pl-10 pr-3 py-1.5  border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:rightk-blue-500'
                        />

                    </div>
                    {/* navitem */}
                    <div className='flex justify-between '>
                        <div className=' hidden md:flex items-center space-x-6'>
                        <Navitem icon={<Home size={18} />} label="Home" />
                        <Navitem icon={<Info size={18} />} label="About" />
                        <Navitem icon={<Briefcase size={18} />} label="Service" />
                        <Navitem icon={<Phone size={18} />} label="Contact" />
                        
                    </div>

                    {/* login section */}
                    <button className='hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg ms-4'>
                        <LogIn size={18} />
                        Login
                    </button>
                    </div>

                

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className='md:hidden text-gray-700'>
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {/* Moblie Menu */}
            {open &&(
                <div className='md:hidden bg-amber-100 shadow-lg px-4 space-y-4'>
                    <MobileNavitem label ="Home"/>
                    <MobileNavitem label="About"/>
                    <MobileNavitem label= "Service"/>
                    <MobileNavitem label ="Contact"/>
                    {/* for search */}
                    <input
                    type='text'
                     placeholder='Search....'
                     className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                     />

                     <button
                     className=' w-full flex justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg'
                     >
                     <LogIn size={18}/>Login
                     </button>
                </div>
            )}
        </nav>
    )
}

export default NavBar
