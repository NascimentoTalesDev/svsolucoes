import { Metadata } from "next";
import HomeScreen from "./_components/home/HomeScreen";
import IdealBg from "./_components/home/IdealBg";
import OurEquipment from "./_components/home/OurEquipment";
import Suport from "./_components/home/Suport";
import SuportBg from "./_components/home/SuportBg";
import Form from "./_components/Form";
import TitleH2 from "./_components/TitleH2";
import Footer from "./_components/footer/page";

export const metadata: Metadata = {
  title: "Início | SV Soluções",
  openGraph: {
    title: "Início | SV Soluções",
  },
  twitter: {
    title: "Início | SV Soluções",
  },
};


export default function Home() {
  return (
    <div className="w-full h-full">
      <HomeScreen />
      <TitleH2 text="Nossos equipamentos"/>
      <OurEquipment />
      <IdealBg />
      <Suport />
      <SuportBg />
      <TitleH2 text="Solicite um orçamento"/>
      <Form id="contact" />
      <Footer />
    </div>
  );
}
