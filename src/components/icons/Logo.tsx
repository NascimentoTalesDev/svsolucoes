import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={""}>
        <Image src={"/images/whatsapp.png"} alt='WhatsApp' height={20} width={20} />
    </Link>
  )
}

export default Logo