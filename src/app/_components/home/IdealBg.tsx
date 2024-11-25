import React from 'react'
import CenterContent from '../CenterContent'

const IdealBg = () => {
  return (
    <div className='ideal-bg relative h-[550px]'>
        <div className='h-full bg-black/20'>
            <CenterContent>
                <div className='h-full text-white flex justify-end items-center'>
                    <span className='text-4xl md:text-5xl text-right leading-tight font-bold'>Impulsione sua obra com <br className='hidden md:block' />o equipamento ideal <br className='hidden md:block' />no momento certo!</span>
                </div>
            </CenterContent>
        </div>
    </div>
  )
}

export default IdealBg