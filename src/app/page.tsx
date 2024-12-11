import { Metadata } from "next";
import HomeScreen from "./_components/home/HomeScreen";
import IdealBg from "./_components/home/IdealBg";
import OurEquipment from "./_components/home/OurEquipment";
import Suport from "./_components/home/Suport";
import TitleH2 from "./_components/TitleH2";

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
      <OurEquipment limit={3} />
      <IdealBg />
      <Suport />
    </div>
  );
}
