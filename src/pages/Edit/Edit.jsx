import React from 'react'
import FigureAdd from '../../components/FigureAdd/FigureAdd'
import FormAddEdit from '../../components/FormAddEdit'
import { GridPage } from '../../styles/globalStyles'

const Edit = () => {
  return (
    <GridPage>
      <FormAddEdit text="Editar item" txtBtn="Editar"/>
      <FigureAdd/>
    </GridPage>
    
  )
}

export default Edit