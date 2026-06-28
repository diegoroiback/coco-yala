import { IoCalendarOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

import styles from './Style.module.scss'

const Intro = ({ img, title, text }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={img} alt="Coco Yala Panamá" width="" height="" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.items}>
            <div className={styles.item}>
              <IoCalendarOutline className={styles.icon} />
              <p className={styles.item_title}>5+</p>
              <p className={styles.item_text}>Años de experiencia</p>
            </div>
            <div className={styles.item}>
              <LuUsers className={styles.icon} />
              <p className={styles.item_title}>100+</p>
              <p className={styles.item_text}>Clientes satisfechos</p>
            </div>
            <div className={styles.item}>
              <SlLocationPin className={styles.icon} />
              <p className={styles.item_title}>Cobertura</p>
              <p className={styles.item_text}>Nacional e internacional</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Intro