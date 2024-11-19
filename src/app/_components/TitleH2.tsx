import { cn } from '@/lib/utils'
import React from 'react'

interface TitleH2Props{
    text: string
    className?: string
}

const TitleH2 = ({ text, className }: TitleH2Props ) => {
  return (
    <h2 className={cn(`font-bold text-center text-4xl my-14 ${className}`)}>{text}</h2>
  )
}

export default TitleH2