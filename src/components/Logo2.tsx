import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo2 = () => {
  return (
    <div>
        <Link href="/">
            <Image height={70} width={70} alt='Logo' src={"/images/logo.png"} />
        </Link>
    </div>
  )
}

export default Logo2