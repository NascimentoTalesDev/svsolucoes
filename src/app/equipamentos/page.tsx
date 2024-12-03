import { Metadata } from 'next';
import React from 'react'
import OurEquipment from '../_components/home/OurEquipment';
import TitleH1 from '../_components/TitleH1';
import IdealBg from '../_components/home/IdealBg';
import Suport from '../_components/home/Suport';

export const metadata: Metadata = {
  title: "Equipamentos | SV Soluções",
  openGraph: {
    title: "Equipamentos | SV Soluções",
  },
  twitter: {
    title: "Equipamentos | SV Soluções",
  },
};

const EquipmentsPage = () => {
  return (
    <>
      <TitleH1 text='Nossos Equipamentos' />
      <OurEquipment />
      <IdealBg />
      <Suport />
    </>
  )
}

export default EquipmentsPage