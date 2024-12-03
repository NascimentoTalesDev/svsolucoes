import React from 'react'
import CenterContent from '../CenterContent'

const Differentials = () => {
  return (
    <div className='bg-white pt-[50px] sm:pt-[100px]'>
      <CenterContent>
        <h2 className='font-bold text-2xl'>Nossos Diferenciais</h2>
        <div className='px-8 sm:px-10 py-10'>
          <ul className='flex flex-col gap-5 list-disc '>
            <li className='font-normal text-justify text-lg'>Equipamentos Modernos: Mantemos um rigoroso padrão de manutenção, oferecendo máquinas sempre prontas para o uso e com alto desempenho.</li>
            <li className='font-normal text-justify text-lg'>Atendimento Personalizado: Escutamos cada necessidade e buscamos a melhor solução para que nossos clientes tenham o máximo de aproveitamento.</li>
            <li className='font-normal text-justify text-lg'>Suporte Técnico Completo: Equipe qualificada para oferecer suporte técnico em tempo hábil, garantindo que suas operações não parem.</li>
            <li className='font-normal text-justify text-lg'>Flexibilidade e Agilidade: Oferecemos contratos flexíveis e entregas rápidas para que você possa contar com o equipamento certo, no momento certo.</li>
          </ul>
        </div>
      </CenterContent>
    </div>
  )
}

export default Differentials