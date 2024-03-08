"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const NavBar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'issues', href: '/issues' }
    ]

    const currPath = usePathname();
    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href={"/"}><FaBug /></Link>
            <ul className='flex space-x-6'>
                {links.map((link) => (<li
                    key={link.href}>
                    {/* <Link className={`${link.href === currPath ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-800`} href={link.href}>
                        {link.label}
                    </Link> */}
                    <Link
                        key={link.href}
                        className={classnames({
                            'text-zinc-900': link.href === currPath,
                            'text-zinc-500': link.href !== currPath,
                            'hover:text-zinc-800 transition-colors': true
                        })}
                        href={link.href}>
                        {link.label}
                    </Link>
                </li>))}
            </ul>
        </nav>
    )
}

export default NavBar