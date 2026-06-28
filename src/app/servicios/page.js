import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import InnerIntro from "@/components/InnerIntro/InnerIntro";
import ServicesInner from "@/components/ServicesInner/ServicesInner";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const galleryPhotos = [
    '/images/galeria-cocos-kuna-1.jpg',
    '/images/galeria-cocos-kuna-2.jpg',
    '/images/galeria-cocos-kuna-3.jpg',
    '/images/galeria-cocos-kuna-4.jpg',
    '/images/galeria-cocos-kuna-5.jpg',
    '/images/galeria-cocos-kuna-6.jpg'
  ]
  return (
    <div>
      <Header />
      <Banner heightSection={false}
        img='/images/banner-internas.jpg' />
      <InnerIntro 
        img='/images/intro-coco-yala.jpg'
        title='Nuestros servicios'
        subtitle='Soluciones para la industria del coco en Panamá'
        text={<>En Coco Yala nos dedicamos a la compra, acopio, comercialización, transporte y distribución de cocos de la más alta calidad. Trabajamos de la mano con productores locales para garantizar una cadena de suministro confiable, llevando productos frescos desde las zonas de cultivo hasta nuestros clientes.
        <br />
        <br />
        Nuestra experiencia, compromiso logístico y conocimiento del mercado nos permiten ofrecer soluciones integrales para la industria del coco, asegurando calidad, trazabilidad y cumplimiento en cada entrega.</>} />
      <ServicesInner />
      <Footer />
    </div>
  );
}
