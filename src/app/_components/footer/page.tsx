import React from 'react'
import CenterContent from '../CenterContent'
import FacebookIconMedia from '@/components/icons/FacebookIconMedia'
import InstagramIconMedia from '@/components/icons/InstagramIconMedia'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='mt-[100px] mb-[50px]'>
            <CenterContent>
                <div className='flex flex-col gap-[100px]'>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-24'>
                        <div>
                            <h3 className='text-primary font-bold text-2xl mb-[30px]'>SV Soluçoes</h3>
                            <p className='text-justify'>A SV Soluções é especializada no aluguel de mini escavadeiras e equipamentos pesados. Oferecemos máquinas modernas, suporte técnico dedicado e condições flexíveis de locação, garantindo eficiência e segurança para projetos de construção e infraestrutura.</p>
                        </div>
                        <div className='md:ml-10'>
                            <h3 className='text-primary font-bold text-2xl mb-[30px]'>Menu</h3>
                            <div>
                                <ul className='flex flex-col gap-5'>
                                    <Link className='text-secondary w-fit hover:text-primary' href={""}>Início</Link>
                                    <Link className='text-secondary w-fit hover:text-primary' href={""}>Equipamentos</Link>
                                    <Link className='text-secondary w-fit hover:text-primary' href={""}>Sobre nós</Link>
                                    <Link className='text-secondary w-fit hover:text-primary' href={""}>Solicitar orçamento</Link>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <h3 className='text-primary font-bold text-2xl'>Siga-nos nas redes</h3>
                            <p className='text-justify'>Acompanhe a SV Soluções nas redes sociais para novidades, dicas e informações sobre aluguel de mini escavadeiras. Fique por dentro de promoções e interaja conosco!</p>
                            <div className='flex gap-4'>
                                <FacebookIconMedia />
                                <InstagramIconMedia />
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr></hr>
                        <div className='mt-5'>
                            <span className='text-sm'>&copy; SV Soluções. Todos os direitos reservados.</span>
                        </div>
                    </div>
                </div>
            </CenterContent>
        </div>
    )
}

export default Footer