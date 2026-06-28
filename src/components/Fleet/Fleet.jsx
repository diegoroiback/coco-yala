import Link from "next/link";

import styles from './Style.module.scss'

const Fleet = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
              <div className={styles.image}>
                <img src="/images/don-chelo.jpg" className={styles.img} alt="Servicios coco panama" />
              </div>
              <div className={styles.caption}>
                <h4 className={styles.name}>Don Chelo</h4>
                <p className={styles.text}>Nuestra embarcación principal para operaciones de gran volumen. Don Chelo desempeña un papel fundamental en la cadena logística de Coco Yala, permitiendo el transporte eficiente de grandes cantidades de coco desde las comunidades productoras de Guna Yala hacia los centros de distribución. Su capacidad de carga y confiabilidad operativa nos permiten responder a la demanda de clientes mayoristas y garantizar un abastecimiento constante.
                  <br /><br />
                  <strong>Capacidad de carga:</strong> Hasta 50 toneladas<br />
                  <strong>Capacidad operativa:</strong> Hasta 70,000 cocos por viaje<br />
                  <strong>Eslora aproximada:</strong> 27 metros
                </p>
              </div>
          </li>
          <li className={styles.item}>
              <div className={styles.image}>
                <img src="/images/sasha.jpg" className={styles.img} alt="Servicios coco panama" />
              </div>
              <div className={styles.caption}>
                <h4 className={styles.name}>Sasha</h4>
                <p className={styles.text}>Sasha complementa nuestras operaciones marítimas brindando flexibilidad y apoyo estratégico en el transporte de carga y logística regional. Su versatilidad permite movilizar productos entre comunidades, apoyar operaciones de abastecimiento y fortalecer la capacidad de respuesta de Coco Yala en toda la región de Guna Yala.
                  <br /><br />
                  <strong>Capacidad de carga:</strong> Hasta 10 toneladas<br />
                  <strong>Capacidad operativa:</strong> Hasta 12,000 cocos por viaje<br />
                  <strong>Eslora aproximada:</strong> 60 pies
                </p>
              </div>
          </li>
          <li className={styles.item}>
              <div className={styles.image}>
                <img src="/images/camionetas.jpg" className={styles.img} alt="Servicios coco panama" />
              </div>
              <div className={styles.caption}>
                <h4 className={styles.name}>Flota Terrestre</h4>
                <p className={styles.text}>Nuestra flota terrestre conecta las operaciones marítimas con los mercados nacionales, permitiendo el traslado seguro y eficiente del producto hacia Chepo, Ciudad de Panamá y otros destinos comerciales. Gracias a nuestros vehículos de carga, mantenemos una cadena logística integrada que garantiza puntualidad, control operativo y capacidad de distribución para clientes de diferentes escalas.
                  <br /><br />
                  <strong>Cobertura:</strong> Guna Yala - Chepo - Ciudad de Panamá<br />
                  <strong>Funciones:</strong> Transporte, distribución y apoyo logístico<br />
                  <strong>Ventaja:</strong> Operación integrada con flota marítima propia
                </p>
              </div>
          </li>
        </ul>
        <Link href={'/contacto'} className={styles.btn}>Contactar</Link>
      </div>
    </div>
  )
}

export default Fleet