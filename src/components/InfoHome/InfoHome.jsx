import styles from './Style.module.scss'

const InfoHome = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src='/images/cultura-cocotera.jpg' alt="Coco Yala Panamá" width="" height="" />
        </div>
        <div className={styles.content}>
          <h4 className={styles.subtitle}>Guna Yala</h4>
          <h3 className={styles.title}>Tradición cocotera</h3>
          <p className={styles.text}>
            Guna Yala posee una larga tradición vinculada al cultivo, selección y comercialización del coco. Durante generaciones, sus comunidades han sostenido una economía local alrededor de este producto.
            <br /><br />
            Coco Yala nace para fortalecer esta actividad mediante mejores procesos de acopio, logística, formalidad comercial y conexión con mercados nacionales.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoHome