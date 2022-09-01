import React from 'react'

import { GridPage } from '../../styles/globalStyles'
import FigureAdd from '../../components/FigureAdd/FigureAdd'
import FromAddEdit from '../../components/FromAddEdit'

const Add = () => {
  return (
    <GridPage>
      <FromAddEdit text="Adicionar item"/>
      <FigureAdd/>
    </GridPage>
  )
}

export default Add