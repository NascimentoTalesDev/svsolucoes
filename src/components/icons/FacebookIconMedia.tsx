import { Facebook } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FacebookIconMedia = () => {
  return (
    <div className='bg-primary flex items-center justify-center rounded-lg'>
      <Link className='p-1' href={""}>
          <Facebook className='text-white' />
      </Link>
    </div>
  )
}

export default FacebookIconMedia