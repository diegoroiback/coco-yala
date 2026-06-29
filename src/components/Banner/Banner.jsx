
import Link from 'next/link'
import styles from './Style.module.scss'

const Banner = ({img, heightSection, title, text, url}) => {
  return (
    <div className={`${styles.section} ${heightSection ? styles.section_home : ''}`}>
      <div className={styles.image} style={{ backgroundImage: `url(${img})` }}></div>
      <div className={styles.content}>
        {title && (
          <>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
            <Link href="/contacto" className={styles.btn}>Contactar</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Banner