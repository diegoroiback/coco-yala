'use client'

import * as Accordion from '@radix-ui/react-accordion'
import styles from './Style.module.scss'

const faqs = [
  {
    question: '¿A qué se dedica Coco Yala?',
    answer:
      'Coco Yala se dedica a la compra, acopio, transporte, distribución y comercialización de coco seco proveniente de comunidades productoras de Guna Yala.'
  },
  {
    question: '¿Dónde opera Coco Yala?',
    answer:
      'Nuestra operación conecta comunidades de Guna Yala con Chepo, Ciudad de Panamá y otros mercados nacionales.'
  },
  {
    question: '¿Venden coco al por mayor?',
    answer:
      'Sí. Atendemos compradores mayoristas, distribuidores, procesadores de alimentos, supermercados, hoteles, restaurantes y clientes comerciales que requieran abastecimiento constante.'
  },
  {
    question: '¿Cuál es la capacidad de abastecimiento?',
    answer:
      'Actualmente contamos con capacidad operativa de hasta 80,000 cocos mensuales, con posibilidad de aumentar según demanda, contratos o acuerdos comerciales.'
  },
  {
    question: '¿Cuentan con transporte propio?',
    answer:
      'Sí. Coco Yala cuenta con flota marítima y apoyo terrestre para movilizar el producto desde Guna Yala hacia puntos de distribución y clientes finales.'
  },
  {
    question: '¿Trabajan directamente con productores?',
    answer:
      'Sí. Compramos directamente en comunidades productoras de Guna Yala, fortaleciendo la economía local y apoyando a familias productoras.'
  },
  {
    question: '¿Cómo puedo solicitar una cotización?',
    answer:
      'Puede contactarnos directamente por WhatsApp o llamada para indicar el volumen requerido, destino y frecuencia de compra.'
  }
]

const Faq = ({ showTitle }) => {
  
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {showTitle && (
          <h2 className={styles.title}>Preguntas frecuentes</h2>
        )}
        <Accordion.Root
          type="single"
          collapsible
          className={styles.accordion}
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className={styles.item}
            >
              <Accordion.Header>
                <Accordion.Trigger className={styles.trigger}>
                  <span>{faq.question}</span>
                  <span className={styles.icon}>+</span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className={styles.content}>
                <p>{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  )
}

export default Faq