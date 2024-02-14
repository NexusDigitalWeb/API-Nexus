import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nexus: Consultora Digital | Diseño Web, SEO, Marketing y Más",
  description: "En Nexus, ofrecemos soluciones digitales integrales para potenciar tu presencia en línea. Desde diseño web y SEO hasta marketing digital y gestión de redes sociales, nuestro equipo experto está aquí para ayudarte a destacar en esta nueva era digital",
  keywords: ["Consultora digital", "Diseño web", "SEO", "Migración de bases de datos", "marketing digital", "Redes sociales",
"Estrategia digital", "Desarrollo web", "Optimización de sitios web", "Gestión de redes sociales", "Estrategias de SEO", "Marketing en línea",
"Posicionamiento web","Analítica web","Publicidad en línea"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${spaceGrotesk.className} bg-[#ffffff] overflow-x-hidden flex flex-col gap-[20px]`}
      >
        {children}
      </body>
    </html>
  );
}
