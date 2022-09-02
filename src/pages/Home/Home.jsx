import React from 'react'
import { ContainerWelcome, TitleHome } from './styles'
import homeWelcome from '../../assets/homeWelcome.png'
import logoHome from '../../assets/logo-home.svg'


const Home = () => {
  return (
    <>
      <ContainerWelcome>
        <div>
          <img src={logoHome} alt="logo" />
          <TitleHome>Sejam bem vindos a melhor experiência de todas!</TitleHome>
        </div>
        <img className="bannerHome" src={homeWelcome} alt="banner bem vindo" />
      </ContainerWelcome>
    </>
  )
}

export default Home