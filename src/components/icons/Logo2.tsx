import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo2 = () => {
  return (
    <Link href={"/"}>
        <Image src={"/images/logo2.png"} alt='Logo' height={70} width={70} />
    </Link>
  )
}

export default Logo2