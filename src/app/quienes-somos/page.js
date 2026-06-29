import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import InnerIntro from "@/components/InnerIntro/InnerIntro";
import Company from "@/components/Company/Company";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: 'Quiénes Somos | Coco Yala - Cocos en Panamá',
  description:
    'Conoce la historia, misión y compromiso de Coco Yala, una empresa dedicada al desarrollo de la industria del coco y al fortalecimiento de las comunidades productoras de Guna Yala.',
}

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
        title='Quienes somos'
        subtitle='Acopio, transporte, distribucion y comercializacion de coco'
        text={<>
        Coco Yala es una empresa panamena especializada en la cadena de valor del coco seco: compra directa, acopio, clasificacion, transporte maritimo, transporte terrestre y comercializacion mayorista.
        <br /><br />
        Trabajamos directamente con productores locales, conectando comunidades productoras de Guna Yala con Ciudad de Panama y futuros mercados internacionales.
        <br /><br />
        Nuestra ventaja principal es operar desde el territorio: conocemos las rutas, las comunidades, los tiempos de carga y las condiciones reales del producto.
        </>} />
      <Company />
      <Footer />
    </div>
  );
}
