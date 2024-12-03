import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatsAppIcon = () => {
  return (
    <Link target='_blank' href={"https://wa.me/5541996864867?text=Olá gostaria de fazer um orçamento"}>
      <Image src={"/images/whatsapp.png"} alt='WhatsApp' height={60} width={60} />
    </Link>
  )
}

export default WhatsAppIcon