"use client";

import Link from 'next/link'
import React from 'react'

import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'
import { usePathname } from 'next/navigation'
import NavLink from './nav.link';

export default function MainHeader() {
    const path = usePathname();

    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="food" />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">
                                Browse Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodie Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
