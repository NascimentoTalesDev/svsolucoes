import React from 'react'

interface CenterContentProps{
    children:  React.ReactNode;
}

const CenterContent = ({ children }: CenterContentProps ) => {
  return (
    <div className='h-full w-full max-w-[1220px] mx-auto px-5'>{children}</div>
  )
}

export default CenterContent