import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatsAppIcon = () => {
  return (
    <Link href={""}>
        <Image src={"/images/whatsapp.png"} alt='WhatsApp' height={60} width={60} />
    </Link>
  )
}

export default WhatsAppIcon