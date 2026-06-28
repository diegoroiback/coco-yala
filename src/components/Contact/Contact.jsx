import Link from "next/link";

import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


import styles from './Style.module.scss'

const Contact = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.list}>
          <Link href={'tel:+50767242296'} target="_blank" className={styles.item}>
            <div className={styles.ico}>
              <FiPhone className={styles.icon} />
            </div>
            <div className={styles.content}>
              <span className={styles.title}>Llamar ahora</span>
              <span className={styles.text}>+507 6724-2296</span>
            </div>
          </Link>
          <Link href={'https://wa.me/50767242296?text=Hola%20Coco%20Yala,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20servicios.'} target="_blank" className={styles.item}>
            <div className={styles.ico}>
              <FaWhatsapp className={styles.icon} />
            </div>
            <div className={styles.content}>
              <span className={styles.title}>Escribir por Whatsapp</span>
              <span className={styles.text}>+507 6724-2296</span>
            </div>
          </Link>
          <Link href={'mailto:info@gmail.com'} target="_blank" className={styles.item}>
            <div className={styles.ico}>
              <FiMail className={styles.icon} />
            </div>
            <div className={styles.content}>
              <span className={styles.title}>Contactar por E-mail</span>
              <span className={styles.text}>info@gmail.com</span>
            </div>
          </Link>
        </div>
        <div className={styles.image}>
          <img src='/images/contacto.jpg' alt="Coco Yala Panamá" width="" height="" />
        </div>
      </div>
    </div>
  )
}

export default Contact