import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Intro from "@/components/Intro/Intro";
import Services from "@/components/Services/Services";
import InfoHome from "@/components/InfoHome/InfoHome";
import Faq from "@/components/Faq/Faq";
import Gallery from "@/components/Gallery/Gallery";
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
      <Banner heightSection={true}
        img='/images/banner-cocos-yala-home.jpg'
        title={(<>Venta, compra y distribución de <span>cocos</span> en Panamá</>)}
        text='Conectamos a los productores de Guna Yala con los mercados de Panamá mediante una logística eficiente y confiable.' />
      <Intro 
        img='/images/intro-coco-yala.jpg'
        title='Soluciones integrales para la industria del coco en Panamá'
        text={<>En Coco Yala nos dedicamos a la compra, acopio, comercialización, transporte y distribución de cocos de la más alta calidad. Trabajamos de la mano con productores locales para garantizar una cadena de suministro confiable, llevando productos frescos desde las zonas de cultivo hasta nuestros clientes.
        <br />
        <br />
        Nuestra experiencia, compromiso logístico y conocimiento del mercado nos permiten ofrecer soluciones integrales para la industria del coco, asegurando calidad, trazabilidad y cumplimiento en cada entrega.</>} />
      <Services />
      <Gallery images={galleryPhotos} title={true} />
      <InfoHome />
      <Faq showTitle={true} />
      <Footer />
    </div>
  );
}
