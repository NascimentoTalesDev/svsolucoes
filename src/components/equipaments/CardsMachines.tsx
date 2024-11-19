import React from 'react'
import CardMachine from './CardMachine'
import { machines } from '@/data/machines'


const CardsMachines = () => {
  return (
    <div className='flex flex-col gap-5 mb-[100px]'>
        {machines.length > 0 && machines.map(machine => (
            <CardMachine  key={machine.id} machine={machine} />
        ))}
    </div>
  )
}

export default CardsMachines