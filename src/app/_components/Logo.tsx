import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps{
  href?: string
}

const Logo = ({ href }: LogoProps) => {
  return (
    <div className='relative w-[70px] h-[70px]'>
      <Link href={href ? href : "/"}>
        <Image src={"/images/logo.png"} alt='Logo' fill />
      </Link>
    </div>
  )
}

export default Logo