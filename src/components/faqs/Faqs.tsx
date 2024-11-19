import React from 'react'
import Faq from './faq'
import { faqs } from '@/data/faqs'
import { Accordion } from '../ui/accordion'

const Faqs = () => {

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.length > 0 && faqs.slice(0, 6).map(faq => (
        <Faq key={faq?.id} faq={faq} />
      ))}
    </Accordion>
  )
}

export default Faqs