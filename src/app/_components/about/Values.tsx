import React from 'react'
import CenterContent from '../CenterContent'

const Values = () => {
  return (
    <div className='bg-primary py-[50px] sm:py-[100px] text-white'>
      <CenterContent>
        <div>
          <ul className='flex flex-col gap-5'>
            <li>
              <h3 className='font-bold text-lg'>1. Compromisso com a Qualidade</h3>
              <p className='ml-5 font-light'>Entregamos equipamentos modernos, bem conservados e de alta performance, garantindo a produtividade e a segurança nas obras dos nossos clientes.</p>
            </li>
            <li>
              <h3 className='font-bold text-lg'>2. Atendimento Personalizado</h3>
              <p className='ml-5 font-light'>Cada cliente é único e merece um atendimento sob medida. Priorizamos um relacionamento próximo, ágil e eficaz, compreendendo e atendendo às necessidades específicas de cada projeto.</p>
            </li>
            <li>
              <h3 className='font-bold text-lg'>3. Segurança em Primeiro Lugar</h3>
              <p className='ml-5 font-light'>A segurança dos nossos clientes e colaboradores é uma prioridade em todos os processos. Garantimos que nossos equipamentos atendam aos mais altos padrões de segurança e manutenção.</p>
            </li>
            <li>
              <h3 className='font-bold text-lg'>5. Responsabilidade Social e Ambiental</h3>
              <p className='ml-5 font-light'>Estamos sempre atentos às tendências e inovações tecnológicas do mercado para oferecer soluções modernas e eficientes que aumentem a produtividade dos nossos clientes.</p>
            </li>
            <li>
              <h3 className='font-bold text-lg'>6. Transparência e Confiança</h3>
              <p className='ml-5 font-light'>Construímos relações de confiança com base em transparência e integridade em todas as nossas ações, garantindo que nossos clientes possam contar com nossa palavra e serviços.</p>
            </li>
          </ul>
        </div>
      </CenterContent>
    </div>
  )
}

export default Values