import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../../assets/images/Safarflight-logo.png';
const Navigation = () => {
    const [navActive, setNavActive] = useState(false)
    const navMenus = [
        {
            title: 'Home',
            url:''
        },
        {
            title: 'About',
            url:''
        },
        {
            title: 'Vehicle Hire',
            url:''
        },
        {
            title: 'Hotel Booking',
            url:''
        },
        {
            title: 'Contact',
            url:''
        }
    ]

    const toggleNavigation = () => {
        setNavActive(!navActive)
    }
   return(
    <div className="w-full">
        <div className="py-10 flex flex-wrap items-center -mx-16 justify-between lg:-mt-24">
            <div className="px-56 py-40 relative ml-16 ">
                <img src={Logo} alt="Safar Flights" className="w-full absolute inset-0 h-full w-full object-center object-contain"/>
            </div>
            <div className="flex items-center justify-end text-white">
                <NavLink to="/" className="px-16 font-semibold text-sm hidden lg:block">Vehicle Hire</NavLink>
                <NavLink to="/" className="px-16 font-semibold text-sm hidden lg:block">Hotel Booking</NavLink>
                <NavLink to="/"  className="px-16 font-semibold text-xs border-1 border-white py-6 rounded px-24 text-xs font-bold uppercase hover:bg-white hover:text-blue-300 ml-16">Sign in</NavLink>
                <div className="text-3xl px-16 cursor-pointer ml-16" onClick={toggleNavigation}>
                    <FiMenu/>
                </div>
            </div>
        </div>
        {navActive && <div className="fixed inset-0 z-20 bg-black opacity-50" onClick={toggleNavigation}></div>}
        <div className={`fixed right-0 z-50 top-0 py-56 px-20 h-full bg-white overflow-visible overlay-nav transition-all duration-500 linear ${navActive?'right-0':'-right-10/10'}`}>
            <div className="cursor-pointer transition-all duration-300 ease absolute right-20 top-20 text-red-300 text-xl bg-gray-50 hover:bg-red-300  hover:text-white border-1 border-gray-100 hover:border-red-300 p-8 rounded-full" onClick={toggleNavigation}>
                <CgClose/>
            </div>
            <ul>
                {navMenus.map((item,i)=>{
                    return <li className="border-b-1 border-dashed border-gray-100"><NavLink to="#" className="py-16 block text-sm  hover:text-blue-300">{ item.title }</NavLink></li>
                })}
                
            </ul>
        </div>
    </div>)
}
export default Navigation;