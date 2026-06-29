import { Roboto } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '600', '700', '800'],
});

export const metadata = {
  title: "Coco Yala | venta y distribución de cocos en Panamá",
  description: "Coco Yala, especialistas en la venta y distribución de cocos en Panamá. Suministramos cocos de alta calidad para hoteles, restaurantes, supermercados y negocios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${robotoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
