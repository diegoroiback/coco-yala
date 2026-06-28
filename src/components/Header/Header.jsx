'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

import styles from './Style.module.scss'

const navHeader = [
  {
    name: 'Inicio',
    url: '/'
  },
  {
    name: 'Quienes somos',
    url: '/quienes-somos'
  },
  {
    name: 'Servicios',
    url: '/servicios'
  },
  {
    name: 'Nuestra flota',
    url: '/nuestra-flota'
  },
  {
    name: 'Cobertura',
    url: '/cobertura'
  },
  {
    name: 'Galería',
    url: '/galeria'
  },
]

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)

  const clickBtn = () => {
    setMenuActive(!menuActive)
  }

  return (
    <header className={styles.section}>
      <div className={styles.container}>
        <Link href={'/'} className={styles.logo}>
          <img src={'/images/coco-yala-logo.png'} alt='Coco Yala' width='230px' height='75px' />
        </Link>
        <div className={styles.content}>
          <button className={styles.menuBtn} onClick={() => clickBtn()}><CgMenuRight /></button>
          <nav className={`${styles.nav} ${menuActive ? styles.nav_active : ''}`}>
            <button className={`${styles.menuBtn_close} ${styles.menuBtn}`} onClick={() => clickBtn()}><IoClose /></button>
            {navHeader.map((item, index) => (
              <div key={index}>
                <Link className={styles.link} href={item.url}>{item.name}</Link>
              </div>
            ))}
            <div>
              <Link href={'/contacto'} className={styles.btn}>Contactar</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header