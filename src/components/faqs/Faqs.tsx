import React from 'react'
import { faqs } from '@/data/faqs'
import { Accordion } from '../ui/accordion'
import FaqQuestion from './Faq'

const Faqs = () => {

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.length > 0 && faqs.slice(0, 6).map(faq => (
        <FaqQuestion key={faq?.id} faq={faq} />
      ))}
    </Accordion>
  )
}

export default Faqs