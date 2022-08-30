import React,{useState,useEffect} from "react";
import Card from "../../components/Card";
import FormSearch from "../../components/FormSimple";
import {
  ContainerBanner,
  ContainerCard,
  ContainerPage,
  Title,
} from "../../components/UI";

const Cardapio = () => {
  const [infos, setInfos] = useState("")

  const handleReq = ()=>{

  }
  
  return (
    <ContainerPage>
      <ContainerBanner>
        <Title>Container</Title>
      </ContainerBanner>
      <ContainerCard>
        <FormSearch/>
        <Card/>
      </ContainerCard>
    </ContainerPage>
  );
};

export default Cardapio;
