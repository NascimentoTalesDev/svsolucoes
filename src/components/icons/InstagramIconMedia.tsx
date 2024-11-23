import { Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const InstagramIconMedia = () => {
  return (
    <div className='bg-primary flex items-center justify-center rounded-lg'>
      <Link className='p-1' href={""}>
          <Instagram className='text-white' />
      </Link>
    </div>
  )
}

export default InstagramIconMedia