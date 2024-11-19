import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatsIconMedia = () => {
  return (
    <Link href={""}>
        <Image src={"/images/social-media/whatsmedia.png"} alt='WhatsApp' height={30} width={30} />
    </Link>
  )
}

export default WhatsIconMedia