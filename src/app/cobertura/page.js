import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import InnerIntro from "@/components/InnerIntro/InnerIntro";
import Coverage from "@/components/Coverage/Coverage";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner heightSection={false}
        img='/images/banner-internas.jpg' />
      <InnerIntro 
        img='/images/intro-coco-yala.jpg'
        title='Cobertura Operativa'
        subtitle='Conectando las comunidades de Guna Yala con los mercados de Panamá'
        text={<>
        Coco Yala desarrolla sus operaciones en toda la región de Guna Yala, trabajando directamente con comunidades productoras para garantizar un abastecimiento constante y una cadena logística eficiente. Nuestra cobertura integra procesos de compra, acopio, transporte marítimo y distribución terrestre, permitiendo conectar zonas de difícil acceso con los principales centros comerciales del país.
        <br /><br />
Gracias a nuestra presencia en campo, infraestructura logística y conocimiento del territorio, somos capaces de movilizar el producto desde las comunidades productoras hasta Chepo y Ciudad de Panamá, ofreciendo soluciones confiables para clientes mayoristas, distribuidores, procesadores de alimentos y futuros mercados internacionales.
        </>} />
      <Coverage />
      <Footer />
    </div>
  );
}
