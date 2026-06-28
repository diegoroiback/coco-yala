import Link from "next/link";
import { PiTreePalmLight } from "react-icons/pi";
import { HiOutlineTruck } from "react-icons/hi2";
import { SlSocialDropbox } from "react-icons/sl";

import styles from './Style.module.scss'

const Services = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>Servicios</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
              <PiTreePalmLight className={styles.icon} />
              <h4 className={styles.name}>Compra y Acopio</h4>
              <p className={styles.text}>Trabajamos directamente con productores locales para garantizar un suministro constante de cocos frescos y de alta calidad.</p>
          </li>
          <li className={styles.item}>
              <HiOutlineTruck className={styles.icon} />
              <h4 className={styles.name}>Transporte y Logística</h4>
              <p className={styles.text}>Gestionamos el transporte eficiente de la mercancía, asegurando entregas seguras y oportunas.</p>
          </li>
          <li className={styles.item}>
              <SlSocialDropbox className={styles.icon} />
              <h4 className={styles.name}>Comercialización y Distribución</h4>
              <p className={styles.text}>Conectamos la producción panameña con mercados nacionales e internacionales.</p>
          </li>
        </ul>
        <Link href={'/contacto'} className={styles.btn}>Contactar</Link>
      </div>
    </div>
  )
}

export default Services