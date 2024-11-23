import React from 'react'
import CenterContent from '../CenterContent'

const SuportBg = () => {
  return (
    <div className='suport-bg relative h-[350px]'>
        <div className='h-full bg-black/20'>
            <CenterContent>
                <div className='h-full text-white flex justify-start items-center'>
                    <span className='text-4xl md:text-5xl text-left leading-tight font-bold'>Tem dúvidas sobre qual  <br className='hidden md:block' />equipamento é o mais adequado <br className='hidden md:block' />para necessidade?</span>
                </div>
            </CenterContent>
        </div>
    </div>
  )
}

export default SuportBg