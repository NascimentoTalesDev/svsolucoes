import { Machine } from '@/app/types/machine'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import formatCharacterLimit from '@/lib/formatCharacterLimit'

interface CardMachineProps {
    machine: Machine
}

const CardMachine = ({ machine }: CardMachineProps) => {
  return (
    <div className='border-r-2 border-b-2 shadow-lg rounded-lg'>
        <div className='grid grid-cols-2 items-center mx-auto gap-5 w-[80%]'>
            <div className='relative h-[350px] w-[350px]'>
                <Image src={`/images/machines/${machine?.images[0]}`} alt='Imagem' fill></Image>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h3 className='font-bold text-xl'>{machine?.name}</h3>
                <p>{formatCharacterLimit(200, machine?.description)}</p>
                <Link className='w-fit' href={`/equipamentos/${machine?.id}`}>
                    <Button>Ver detalhes</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CardMachine