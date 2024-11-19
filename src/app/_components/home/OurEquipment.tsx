import React from 'react'
import CenterContent from '../CenterContent'
import TitleH2 from '../TitleH2'
import CardsMachines from '@/components/equipaments/CardsMachines'

const OurEquipment = () => {
  return (
    <CenterContent>
        <TitleH2 text='Nossos Equipamentos'/>
        <CardsMachines />
    </CenterContent>
  )
}

export default OurEquipment