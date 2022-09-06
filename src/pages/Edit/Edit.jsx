import React from 'react'
import FormAddEdit from '../../components/FormAddEdit'
import { PageAddEdit } from '../../styles/globalStyles'
import Beer from '../../components/Beer/Beer'

const Edit = () => {
  return (
    <PageAddEdit>
      <FormAddEdit text="Editar item" txtBtn="Editar"/>
      <Beer/>
    </PageAddEdit>
    
  )
}

export default Edit