import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"}>
        <Image src={"/images/logo.png"} alt='Logo' height={70} width={70} />
    </Link>
  )
}

export default Logo