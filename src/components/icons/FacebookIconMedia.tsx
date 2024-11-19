import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FacebookIconMedia = () => {
  return (
    <Link href={""}>
        <Image src={"/images/social-media/facebookmedia.png"} alt='Facebook' height={30} width={30} />
    </Link>
  )
}

export default FacebookIconMedia