import HomeScreen from "./_components/home/HomeScreen";
import IdealBg from "./_components/home/IdealBg";
import OurEquipment from "./_components/home/OurEquipment";
import Suport from "./_components/home/Suport";
import SuportBg from "./_components/home/SuportBg";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HomeScreen />
      <OurEquipment />
      <IdealBg />
      <Suport />
      <SuportBg />
    </div>
  );
}
