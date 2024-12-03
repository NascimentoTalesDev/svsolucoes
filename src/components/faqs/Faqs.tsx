import React from 'react'
import { faqs } from '@/data/faqs'
import { Accordion } from '../ui/accordion'
import FaqQuestion from './Faq'

interface FaqsProps {
  limit?: number
}

const Faqs = ({ limit }: FaqsProps) => {

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.length > 0 && (limit ? faqs.slice(0, limit) : faqs).map(faq => (
        <FaqQuestion key={faq?.id} faq={faq} />
      ))}
    </Accordion>
  )
}

export default Faqs