import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import InnerIntro from "@/components/InnerIntro/InnerIntro";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const galleryPhotos = [
    '/images/galeria-cocos-kuna-1.jpg',
    '/images/galeria-cocos-kuna-2.jpg',
    '/images/galeria-cocos-kuna-3.jpg',
    '/images/galeria-cocos-kuna-4.jpg',
    '/images/galeria-cocos-kuna-5.jpg',
    '/images/galeria-cocos-kuna-6.jpg',
    '/images/galeria-cocos-kuna-7.jpg',
    '/images/servicio-coco-1.jpg',
    '/images/servicio-coco-3.jpg',
  ]
  return (
    <div>
      <Header />
      <Banner heightSection={false}
        img='/images/banner-internas.jpg' />
      <InnerIntro 
        img='/images/intro-coco-yala.jpg'
        title='Galería de fotos'
        subtitle='Conectando comunidades, tradición y desarrollo a través del coco.'
        text={<>Explora nuestra historia a través de imágenes que muestran la producción, transporte y comercialización del coco en Guna Yala, así como el compromiso de Coco Yala con el crecimiento económico y social de las comunidades que forman parte de este proyecto.</>} />
      <Gallery images={galleryPhotos} title={false} />
      <Footer />
    </div>
  );
}
