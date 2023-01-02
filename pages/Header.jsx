import styles from '../styles/Home.module.css'
import React, { useState , useRef, useEffect} from "react"
import Link from 'next/link'

const proptitle = 'TK PORTFOLIO';

export default function Header () {
    const [openMenu, setOpenMenu] = useState(false);
    const Clicker =()=> {
      setOpenMenu(!openMenu);
      };
  return (
    <header className={styles.header}>
        <p><Link href="/webdesign"><span className={styles.headerLinkWrap}>WEB WORKS<span className={styles.headerLink}></span></span></Link><span className={styles.headerLinkWrap}><Link href="/">GRAPHIC WORKS</Link><span className={styles.headerLink}></span></span><span className={styles.headerLinkWrap}>PROGRAMINIG<span className={styles.headerLink}></span></span><span className={styles.headerLinkWrap}>ANALOG<span className={styles.headerLink}></span></span><span className={styles.headerLinkWrap}>CONTACT<span className={styles.headerLink}></span></span></p>
      <span onClick={() => Clicker()} className={`${styles.spans} ${openMenu ? styles.open : undefined }`}>＋
      <ul  className={`${styles.CloseUL} ${openMenu ? styles.OpenUL : undefined }`}>
        <Link href="/webdesign"><li>WebWorks</li></Link>
        <li>GraphicWorks</li>
        <li>Programing</li>
        <li>Analog</li>
        <Link href="/"><li>Top</li></Link>
      </ul>
      </span>
      </header>
  )
}