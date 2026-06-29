import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import InnerIntro from "@/components/InnerIntro/InnerIntro";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: 'Preguntas Frecuentes sobre Compra y Distribución de Cocos | Coco Yala',
  description:
    'Resuelve tus dudas sobre abastecimiento, compra, distribución, transporte y comercialización de cocos en Panamá con Coco Yala.',
}

export default function Home() {
  return (
    <div>
      <Header />
      <Banner heightSection={false}
        img='/images/banner-internas.jpg' />
      <InnerIntro 
        img='/images/intro-coco-yala.jpg'
        title='Preguntas Frecuentes'
        subtitle='Todo lo que necesitas saber sobre Coco Yala'
        text={<>Encuentra respuestas rápidas sobre nuestros servicios de compra, venta, acopio, transporte y distribución de cocos en Panamá. Aquí resolvemos las dudas más comunes sobre nuestra operación, cobertura, capacidad de abastecimiento y logística desde Guna Yala hacia los mercados nacionales.</>} />
      <Faq />
      <Footer />
    </div>
  );
}
