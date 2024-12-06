import IdealBg from '@/app/_components/home/IdealBg';
import Suport from '@/app/_components/home/Suport';
import TitleH1 from '@/app/_components/TitleH1';
import { Metadata } from 'next';
import React from 'react';
import { machines } from '@/data/machines';
import CardMachineId from '@/components/equipaments/CardMachineId';
import { Machine } from '@/app/types/machine';
import CenterContent from '@/app/_components/CenterContent';

export const metadata: Metadata = {
  title: "Equipamentos | SV Soluções",
  openGraph: {
    title: "Equipamentos | SV Soluções",
  },
  twitter: {
    title: "Equipamentos | SV Soluções",
  },
};

const EquipmentPageId = async ({ params }: { params: { id: string } }) => {
  let machine: Machine | undefined;

  const { id } = params;
  if (id) {
    machine = machines.find(machine => machine.id === id);
  }

  return (
    <>
      <CenterContent>
        {machine &&
          <div className='pb-[100px]'>
          <TitleH1 text={machine?.name} />
          <CardMachineId machine={machine} />
          </div>
        }
      </CenterContent>
      <IdealBg />
      <Suport />
    </>
  )
}

export default EquipmentPageId