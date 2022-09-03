import React from 'react'
import CardContato from '../../components/CardContato'
import { ContainerContato, TitleContato } from './styles'
import bannerContato from '../../assets/bannerContato.png'

const Contato = () => {
  return (
    <ContainerContato>
      <div className="divConteudo">
        <TitleContato>Conheça o nosso time!</TitleContato>
        <CardContato/>
      </div>
      <img className="background" src={bannerContato} alt="Banner contato" />
    </ContainerContato>
  )
}

export default Contato