import { Metadata } from 'next';
import React from 'react'
import TitleH1 from '../_components/TitleH1';
import Faqs from '@/components/faqs/Faqs';
import CenterContent from '../_components/CenterContent';

export const metadata: Metadata = {
  title: "Faq | SV Soluções",
  openGraph: {
    title: "Faq | SV Soluções",
  },
  twitter: {
    title: "Faq | SV Soluções",
  },
};

const FaqPage = () => {
  return (
    <>
      <CenterContent>
        <TitleH1 text='Dúvidas Frequentes' />
        <div className='w-full max-w-[800px] mx-auto pb-[50px] sm:pb-[100px]'>
          <Faqs />
        </div>
      </CenterContent>
    </>
  )
}

export default FaqPage