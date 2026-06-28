import styles from './Style.module.scss'

const InnerIntro = ({ title, subtitle, text }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default InnerIntro
