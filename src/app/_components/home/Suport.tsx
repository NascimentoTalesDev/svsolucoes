import React from 'react'
import CenterContent from '../CenterContent'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Faqs from '@/components/faqs/Faqs'

const Suport = () => {
  return (
    <div className='w-full my-[100px]'>
        <CenterContent>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                <div className='flex flex-col gap-[30px] w-[350px]'>
                    <h3 className='text-2xl font-bold'>Duvidas frequentes</h3>
                    <p className='text-justify'>Acesse nossa FAQ para obter respostas rápidas e detalhadas sobre nossos serviços, políticas e equipamentos. Tudo de forma clara para simplificar sua experiência. Se ainda tiver dúvidas, nossa equipe está pronta para ajudar!</p>
                    <Link className='w-full md:w-fit' href={"/faq"}>
                        <Button className='w-full'>Ver todas</Button>
                    </Link>
                </div>
                <Faqs />
            </div>
        </CenterContent>
    </div>
  )
}

export default Suport