import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Faq } from '@/app/types/faq'

interface FaqQuestionProps {
    faq: Faq
}

const FaqQuestion = ({ faq }: FaqQuestionProps) => {
    return (
        <AccordionItem value={faq?.id}>
            <AccordionTrigger>{faq?.question}</AccordionTrigger>
            <AccordionContent>{faq?.answer}</AccordionContent>
        </AccordionItem>
    )
}

export default FaqQuestion