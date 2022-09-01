import React from 'react'
import { FormAddEdit } from '../../components/FromAddEdit/styles'
import { GridPage } from '../../styles/globalStyles'
import img_add from '../../assets/img-add-edit.png'

const Add = () => {
  return (
    <GridPage>
      <FormAddEdit/>
      <figure>
        <img src={img_add} alt="bebida" />
      </figure>
    </GridPage>
  )
}

export default Add