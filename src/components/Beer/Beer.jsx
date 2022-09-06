import React from 'react'
import S from './Beer.module.css'

const Beer = () => {
  return (
    <div className={S.container}>
    <div className={S.mug}>
      <div className={S.beer}></div>
  
    </div>
    <div className={S.bubble}></div>
    <div className={S.smallB}></div>
    <div className={S.drip}></div>
  </div>
  )
}

export default Beer