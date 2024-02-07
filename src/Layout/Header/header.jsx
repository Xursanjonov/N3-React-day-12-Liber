import React from 'react'
import { HeaderStart } from './components/header-start'
import { HeaderCenter } from './components/header-center'
import { HeaderEnd } from './components/header-end'
import { Navbar } from './components/header-nav'
import { links } from "./components/data";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className='header'>
            <div className="header-container sticky top-0 bg-white flex items-center justify-between px-[4.688rem] py-[1.375rem]">
                <HeaderStart />
                <HeaderCenter />
                <HeaderEnd />
            </div>
            <Navbar />
            <hr className='h-[.1rem] bg-gray-300' />
            <ul className="header-list w-full px-[4.688rem] py-[.6rem] bg-white flex items-center justify-start gap-5 font-bold">
                    {links.map((item) => (
                        <li className='text-blue-500'>
                            <Link className="Link" key={item.path} to={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
        </header>
    )
}
