import React from 'react'
import CenterContent from './CenterContent'
import ContactForm from '@/components/ContactForm'

interface FormProps {
    id?: string
}

const Form = ({ id }: FormProps) => {
  return (
    <div id={id} className='bg-primary py-[100px]'>
        <CenterContent>
            <div className='bg-light h-[500px] flex items-center'>
                <div className='flex flex-col justify-center gap-[50px] h-full border-r-[1px] w-[392px] border-primary p-5 text-center'>
                    <h3 className='font-bold text-3xl '>Gostaria de falar <br />com um <br />especialista?</h3>
                    <h4>Preencha o formulário e nós <br />entramos em contato com você</h4>
                </div>
                <div className='flex items-center justify-center grow'>
                    <div className='w-[370px]'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </CenterContent>
    </div>
  )
}

export default Form