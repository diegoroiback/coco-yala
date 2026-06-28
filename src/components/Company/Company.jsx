import Link from "next/link";
import { TbTargetArrow } from "react-icons/tb";
import { LuGoal } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";


import styles from './Style.module.scss'

const Company = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
              <TbTargetArrow className={styles.icon} />
              <h4 className={styles.name}>Misión</h4>
              <p className={styles.text}>Impulsar el desarrollo sostenible de la cadena productiva del coco en Guna Yala, generando oportunidades comerciales para productores y familias locales.</p>
          </li>
          <li className={styles.item}>
              <LuGoal className={styles.icon} />
              <h4 className={styles.name}>Visión</h4>
              <p className={styles.text}>Ser una empresa referente en la comercializacion de coco de Panama, reconocida por eficiencia logistica, capacidad de abastecimiento y compromiso social.</p>
          </li>
          <li className={styles.item}>
              <FaRegLightbulb className={styles.icon} />
              <h4 className={styles.name}>Proposito</h4>
              <p className={styles.text}>Conectar el potencial cocotero de Guna Yala con mercados nacionales e internacionales de forma organizada y formal.</p>
          </li>
          <li className={styles.item}>
              <FaRegHandshake className={styles.icon} />
              <h4 className={styles.name}>Compromiso</h4>
              <p className={styles.text}>Operar con respeto hacia las comunidades, transparencia comercial y enfoque de crecimiento compartido.</p>
          </li>
        </ul>
        <Link href={'/contacto'} className={styles.btn}>Contactar</Link>
      </div>
    </div>
  )
}

export default Company