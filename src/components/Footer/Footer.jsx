import Link from 'next/link'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import styles from './Style.module.scss'

const Footer = () => {
  const navFooter = [
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
    {
      name: 'Contacto',
      url: '/contacto'
    },
  ]

  const year = new Date().getFullYear();

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div>
            <div className={styles.image}>
              <Link href={'/'} className={styles.logo}>
                <img src={'/images/coco-yala-logo-blanco.png'} alt='Coco Yala' width='230px' height='75px' />
              </Link>
            </div>
            <div className={styles.contact}>
              <p className={styles.title}>Contacto</p>
              <div className={styles.info}>
                <div className={styles.info_item}>
                  <FaLocationDot className={styles.icon} />
                  <p className={styles.text}>Guna Yala - Panama</p>
                </div>
                <div className={styles.info_item}>
                  <FaPhoneAlt className={styles.icon} />
                  <p className={styles.text}>+507 6724-2296</p>
                </div>
                <div className={styles.info_item}>
                  <IoIosMail className={styles.icon} />
                  <p className={styles.text}>email@email.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.menu}>
            <p className={styles.title}>Menú</p>
            <div className={styles.menu_list}>
              {navFooter.map((item, index) => (
                <div key={index} className={styles.menu_item}>
                  <Link className={styles.link} href={item.url}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rights}>
          <p className={styles.text}> © {year} Coco Yala. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer