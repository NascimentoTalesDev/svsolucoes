import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";
import { Roboto } from "next/font/google";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { ToastProvider } from "./providers/ToastProvider";
import ContactModal from "./modals/ContactModal";

const font = Roboto({ 
  subsets: ['latin' , 'latin-ext'],
  weight: ["300", "500", "700", "900"], 
  style: 'normal', 
});

export const metadata: Metadata = {
  title: "SV Soluções",
  description: "Somos uma empresa líder em locação, reconhecida por proporcionar experiências excepcionais a nossos clientes. Oferecemos soluções personalizadas, um serviço de excelência e compromisso com a satisfação, garantindo sempre qualidade e inovação em cada experiência de locação.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  keywords: "construção, obra, maquinas pesadas, escavadeira",
  authors: [{ name: "Nascimento" }],
  robots: "index, follow",
  openGraph: {
    title: "SV Soluções",
    description: "Somos uma empresa líder em locação, reconhecida por proporcionar experiências excepcionais a nossos clientes. Oferecemos soluções personalizadas, um serviço de excelência e compromisso com a satisfação, garantindo sempre qualidade e inovação em cada experiência de locação.",
    type: "website",
    url: "https://svsolucoes.app-vercel.com",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Logo SV Soluções",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SV Soluções",
    description: "Somos uma empresa líder em locação, reconhecida por proporcionar experiências excepcionais a nossos clientes. Oferecemos soluções personalizadas, um serviço de excelência e compromisso com a satisfação, garantindo sempre qualidade e inovação em cada experiência de locação.",
    images: [
      "/images/logo.png",
    ],
  },
  other: {
    language: "pt-BR",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`relative ${font.className} overflow-x-hidden`}
      >
        <ContactModal />
        <ToastProvider />
        <Header />
        <div className="fixed z-50 right-8 bottom-8">
          <WhatsAppIcon />
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
