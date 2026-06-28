import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import InnerIntro from "@/components/InnerIntro/InnerIntro";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner heightSection={false}
        img='/images/banner-internas.jpg' />
      <InnerIntro 
        img='/images/intro-coco-yala.jpg'
        title='Contacto'
        subtitle='Hablemos sobre abastecimiento, transporte y comercialización de coco'
        text={<>
        En Coco Yala estamos preparados para atender compradores mayoristas, distribuidores, procesadores, exportadores y aliados comerciales que busquen un suministro confiable de coco seco proveniente de Guna Yala.
        <br /><br />
Para consultas, cotizaciones o coordinación de pedidos, puede comunicarse directamente con nuestro representante. Nuestro equipo le brindará atención personalizada según el volumen requerido, destino, frecuencia de compra y necesidades logísticas.
        </>} />
      <Contact />
      <Footer />
    </div>
  );
}
