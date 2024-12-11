import React from 'react'
import CardMachine from './CardMachine'
import { machines } from '@/data/machines'

interface CardsMachinesProps {
  limit?: number
}

const CardsMachines = ({ limit }: CardsMachinesProps) => {
  return (
    <div className='flex flex-col gap-10 md:gap-5 pb-[50px] sm:pb-[100px]'>
      {machines.length > 0 && (limit ? machines.slice(0, limit) : machines).map(machine => (
        <CardMachine key={machine.id} machine={machine} />
      ))}
    </div>
  )
}

export default CardsMachines