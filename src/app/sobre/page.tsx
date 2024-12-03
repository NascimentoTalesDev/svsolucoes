import { Metadata } from 'next';
import React from 'react'
import TitleH1 from '../_components/TitleH1';
import AboutScreen from '../_components/about/AboutScreen';
import Differentials from '../_components/about/Differentials';
import TitleH2 from '../_components/TitleH2';
import MissionBg from '../_components/about/MissionBg';
import ValuesBg from '../_components/about/ValuesBg';
import Reafirmation from '../_components/about/Reafirmation';
import Suport from '../_components/home/Suport';
import Values from '../_components/about/Values';

export const metadata: Metadata = {
  title: "Sobre | SV Soluções",
  openGraph: {
    title: "Sobre | SV Soluções",
  },
  twitter: {
    title: "Sobre | SV Soluções",
  },
};

const AboutPage = () => {
  return (
    <div id='about'>
      <TitleH1 text='Sobre a SV Soluções' />
      <AboutScreen />
      <Differentials />
      <TitleH2 text='Missão e valores' />
      <MissionBg />
      <Values />
      <ValuesBg />
      <Reafirmation />
      <Suport />
    </div>
  )
}

export default AboutPage