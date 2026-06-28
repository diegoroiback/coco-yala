import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import InnerIntro from "@/components/InnerIntro/InnerIntro";
import Fleet from "@/components/Fleet/Fleet";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  return (
    <div>
      <Header />
      <Banner heightSection={false}
        img='/images/banner-internas.jpg' />
      <InnerIntro 
        img='/images/intro-coco-yala.jpg'
        title='Nuestra Flota'
        subtitle='Logística propia que conecta Guna Yala con Panamá'
        text={<>
        Contar con una flota propia nos permite garantizar la continuidad de nuestras operaciones, optimizar los tiempos de transporte y mantener un control directo sobre cada etapa de la cadena de suministro. Nuestras embarcaciones y vehículos terrestres trabajan de manera coordinada para movilizar el coco desde las comunidades productoras de Guna Yala hasta los centros de acopio, puntos de distribución y clientes finales en Panamá.
          <br /><br />
        Gracias a esta infraestructura logística, Coco Yala ofrece una operación confiable, eficiente y preparada para atender proyectos comerciales de diferentes escalas, manteniendo siempre nuestro compromiso con la calidad del producto y el desarrollo de las comunidades productoras.
        </>} />
      <Fleet />
      <Footer />
    </div>
  );
}
