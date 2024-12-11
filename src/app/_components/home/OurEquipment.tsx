import React from 'react'
import CenterContent from '../CenterContent'
import CardsMachines from '@/components/equipaments/CardsMachines'

interface OurEquipmentProps {
  limit?: number
}

const OurEquipment = ({ limit }: OurEquipmentProps) => {
  return (
    <CenterContent>
        <CardsMachines limit={limit}/>
    </CenterContent>
  )
}

export default OurEquipment