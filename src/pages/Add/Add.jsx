import React from 'react'
import { GridPage } from '../../styles/globalStyles'
import FigureAdd from '../../components/FigureAdd/FigureAdd'
import FormAddEdit from '../../components/FormAddEdit'

const Add = () => {
  return (
    <GridPage>
      <FormAddEdit text="Adicionar item" txtBtn="Adicionar"/>
      <FigureAdd/>
    </GridPage>
  )
}

export default Add