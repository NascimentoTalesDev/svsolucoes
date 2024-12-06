"use client"

import React from 'react'
import CenterContent from '../CenterContent'

const AboutScreen = () => {

    return (
        <div className='aboutcreen relative w-full '>
            <div className='h-full w-full bg-bgRed py-20'>
                <CenterContent>
                    <div className='h-full text-center text-white flex flex-col justify-center gap-[20px]'>
                        <p className='text-base md:text-justify sm:text-xl font-bold mb-10'>A SV Soluções é uma empresa especializada no aluguel de equipamentos pesados, com foco em mini escavadeiras e soluções para os mais diversos tipos de obras e projetos de infraestrutura. Com anos de experiência no mercado, nos consolidamos como uma referência pela nossa qualidade, compromisso e inovação.</p>
                        <p className='text-base md:text-justify sm:text-xl font-bold'>Nossa história é pautada na busca constante por oferecer os melhores equipamentos e um atendimento que vai além das expectativas. Valorizamos cada cliente, seja para projetos de pequena, média ou grande escala, oferecendo soluções personalizadas, adaptadas às necessidades específicas de cada obra. Sabemos que agilidade, eficiência e confiança são fundamentais para o sucesso de qualquer projeto, por isso, entregamos equipamentos de última geração, com manutenção preventiva e suporte técnico qualificado.</p>
                    </div>
                </CenterContent>
            </div>
        </div>
    )
}

export default AboutScreen