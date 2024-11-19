import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InstagramIconMedia = () => {
  return (
    <Link href={""}>
        <Image src={"/images/social-media/instagrammedia.png"} alt='Instagram' height={30} width={30} />
    </Link>
  )
}

export default InstagramIconMedia