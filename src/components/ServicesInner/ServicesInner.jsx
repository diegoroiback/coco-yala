import Link from "next/link";
import { PiTreePalmLight } from "react-icons/pi";
import { HiOutlineTruck } from "react-icons/hi2";
import { SlSocialDropbox } from "react-icons/sl";

import styles from './Style.module.scss'

const ServicesInner = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
              <div className={styles.image}>
                <img src="/images/servicio-coco-1.jpg" className={styles.img} alt="Servicios coco panama" />
              </div>
              <div className={styles.caption}>
                <h4 className={styles.name}>Compra y Acopio</h4>
                <p className={styles.text}>Trabajamos directamente con productores y comunidades de Guna Yala para adquirir cocos de la más alta calidad, promoviendo relaciones comerciales justas y sostenibles. Nuestro proceso de acopio garantiza una adecuada selección, clasificación y almacenamiento del producto, preservando su frescura y asegurando un suministro constante para satisfacer la demanda de nuestros clientes.</p>
                <Link href={'/contacto'} className={styles.btn}>Contactar</Link>
              </div>
          </li>
          <li className={styles.item}>
              <div className={styles.image}>
                <img src="/images/servicio-coco-2.jpg" className={styles.img} alt="Servicios coco panama" />
              </div>
              <div className={styles.caption}>
                <h4 className={styles.name}>Transporte y Logística</h4>
                <p className={styles.text}>Contamos con una operación logística eficiente que nos permite movilizar grandes volúmenes de producto de forma segura y puntual. Coordinamos cada etapa del transporte, desde las zonas de producción hasta los centros de distribución o el cliente final, optimizando tiempos, reduciendo costos y garantizando que cada envío llegue en las mejores condiciones.</p>
                <Link href={'/contacto'} className={styles.btn}>Contactar</Link>
              </div>
          </li>
          <li className={styles.item}>
              <div className={styles.image}>
                <img src="/images/servicio-coco-3.jpg" className={styles.img} alt="Servicios coco panama" />
              </div>
              <div className={styles.caption}>
                <h4 className={styles.name}>Comercialización y Distribución</h4>
                <p className={styles.text}>Conectamos la producción de coco panameño con mercados nacionales e internacionales mediante una red comercial sólida y confiable. Nos enfocamos en ofrecer un servicio personalizado, adaptándonos a las necesidades de cada cliente y asegurando una distribución eficiente, trazable y respaldada por altos estándares de calidad.</p>
                <Link href={'/contacto'} className={styles.btn}>Contactar</Link>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ServicesInner