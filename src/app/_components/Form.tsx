import React from 'react'
import CenterContent from './CenterContent'
import ContactForm from '@/components/ContactForm'

interface FormProps {
    id?: string
}

const Form = ({ id }: FormProps) => {
  return (
    <div id={id} className='bg-primary py-[50px] sm:py-[100px]'>
        <CenterContent>
            <div className='grid grid-cols-1 md:grid-cols-3 rounded-md w-full h-full bg-light py-10 px-5 gap-10 items-center'>
                <div className='md:col-span-1 h-full w-full flex flex-col justify-center gap-[50px] md:border-r-[1px] md:border-primary text-center md:px-10'>
                    <h3 className='font-bold text-3xl '>Gostaria de falar com um especialista?</h3>
                    <h4>Preencha o formulário e nós entramos em contato com você</h4>
                </div>
                <div className='md:col-span-2 h-full flex items-center justify-center grow'>
                    <div className='w-full max-w-[370px]'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </CenterContent>
    </div>
  )
}

export default Form