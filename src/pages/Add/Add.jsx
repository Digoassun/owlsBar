import React from 'react'
import {  PageAddEdit } from '../../styles/globalStyles'
import FormAddEdit from '../../components/FormAddEdit'
import Beer from '../../components/Beer/Beer'

const Add = () => {
  return (
    <PageAddEdit>
      <FormAddEdit text="Adicionar item" txtBtn="Adicionar"/>
      <Beer/>
    </PageAddEdit>
  )
}

export default Add