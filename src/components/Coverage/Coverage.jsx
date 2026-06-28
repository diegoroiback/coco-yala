import Link from "next/link";
import { PiTreePalmLight } from "react-icons/pi";
import { CiBoxes } from "react-icons/ci";
import { PiCity } from "react-icons/pi";

import styles from './Style.module.scss'

const Coverage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
              <PiTreePalmLight className={styles.icon} />
              <h4 className={styles.name}>Guna Yala</h4>
              <p className={styles.text}>Red de comunidades productoras y centros de acopio.</p>
          </li>
          <li className={styles.item}>
              <CiBoxes className={styles.icon} />
              <h4 className={styles.name}>Chepo</h4>
              <p className={styles.text}>Base logística y punto de consolidación terrestre.</p>
          </li>
          <li className={styles.item}>
              <PiCity className={styles.icon} />
              <h4 className={styles.name}>Panamá</h4>
              <p className={styles.text}>Centro de distribución, comercialización y desarrollo de mercados.</p>
          </li>
        </ul>
        <Link href={'/contacto'} className={styles.btn}>Contactar</Link>
      </div>
    </div>
  )
}

export default Coverage