"use client"

import React from 'react'
import CenterContent from '../CenterContent'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/app/hooks/use-contact-modal';

const HomeScreen = () => {
    const contact = useContactModal();

    return (
        <div className='homescreen relative w-full h-[calc(100vh-100px)]'>
            <div className='h-full w-full bg-black/20'>
                <CenterContent>
                    <div className='h-full max-w-[700px] text-white flex flex-col justify-center gap-[20px]'>
                        <div>
                            <h1 className='text-5xl md:text-[50px] leading-tight font-bold'>Liderando em locação <br className='hidden sm:block'/> com excelência!</h1>
                        </div>
                        <div className='mb-[20px]'>
                            <p className='text-xl font-medium'>Somos uma empresa líder em locação, reconhecida por proporcionar experiências excepcionais a nossos clientes. Oferecemos soluções personalizadas, um serviço de excelência e compromisso com a satisfação, garantindo sempre qualidade e inovação em cada experiência de locação.</p>
                        </div>
                        <div>
                            <Button onClick={() => contact.onOpen()} variant={"default"} size={"lg"} >Solicitar orçamento</Button>
                        </div>
                    </div>
                </CenterContent>
            </div>
        </div>
    )
}

export default HomeScreen