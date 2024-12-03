import { cn } from '@/lib/utils'
import React from 'react'

interface TitleH1Props{
    text: string
    className?: string
}

const TitleH1 = ({ text, className }: TitleH1Props ) => {
  return (
    <h1 className={cn(`font-bold text-center text-4xl my-8 sm:my-14 ${className}`)}>{text}</h1>
  )
}

export default TitleH1