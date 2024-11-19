import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps{
  href?: string
}

const Logo = ({ href }: LogoProps) => {
  return (
    <Link href={href ? href : "/"}>
      <Image src={"/images/logo.png"} alt='Logo' height={70} width={70} />
    </Link>
  )
}

export default Logo