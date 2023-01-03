import styles from '../styles/Home.module.css'
import React, { useState, useRef, useEffect } from "react"
import Link from 'next/link'

import { gsap } from "gsap";


export default function Header() {

    const gsapEl = useRef();

    console.log(gsapEl.innerHTML);

    useEffect(() => {
        gsapElAnimation()
        gsapElChildAnimation()

    }, [])

    const gsapElAnimation = () => {

    }

    const gsapElChildAnimation = () => {
        gsap.fromTo('.spans',
            { opacity: 0, y: 0 }, //fromの設定
            {  //toの設定
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.1,
            });

    }

    const gsapListChildAnimation = () => {
        gsap.fromTo('.lists',
            { x: 200 }, //fromの設定
            {  //toの設定
                x: 0,
                stagger: 0.06,
            });

    }



    const [openMenu, setOpenMenu] = useState(false);
    const Clicker = () => {
        setOpenMenu(!openMenu);
        gsapListChildAnimation();
    };
    return (
        <header className={styles.header}>
            <p ref={gsapEl}>
                <Link href="/webdesign"><span className={`spans ${styles.headerLinkWrap}`}>WEB WORKS<span className={styles.headerLink}></span></span></Link>
                <Link href="/"><span className={`spans ${styles.headerLinkWrap}`}>GRAPHIC WORKS<span className={styles.headerLink}></span></span></Link>
                <span  className={`spans ${styles.headerLinkWrap}`}>PROGRAMINIG<span className={styles.headerLink}></span></span>
                <span  className={`spans ${styles.headerLinkWrap}`}>ANALOG<span className={styles.headerLink}></span></span>
                <span  className={`spans ${styles.headerLinkWrap}`}>CONTACT<span className={styles.headerLink}></span></span>
            </p>
            <span onClick={() => Clicker()} className={`${styles.spans} ${openMenu ? styles.open : undefined}`}>＋
                <ul className={`${styles.CloseUL} ${openMenu ? styles.OpenUL : undefined}`}>
                    <Link href="/webdesign"><li className= {`lists ${openMenu ? styles.opacity1 : styles.opacity0 }`}>WebWorks</li></Link>
                    <li className= {`lists ${openMenu ? styles.opacity1 : styles.opacity0 }`}>GraphicWorks</li>
                    <li className= {`lists ${openMenu ? styles.opacity1 : styles.opacity0 }`}>Programing</li>
                    <li className= {`lists ${openMenu ? styles.opacity1 : styles.opacity0 }`}>Analog</li>
                    <Link href="/"><li  className= {`lists ${openMenu ? styles.opacity1 : styles.opacity0 }`}>Top</li></Link>
                </ul>
            </span>
        </header>
    )
}