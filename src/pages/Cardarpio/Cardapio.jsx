import React from "react";
import FormSearch from "../../components/FormSimple";
import {
  ContainerBanner,
  ContainerCard,
  ContainerPage,
  Title,
} from "../../components/UI";

const Cardapio = () => {
  return (
    <ContainerPage>
      <ContainerBanner>
        <Title>Container</Title>
      </ContainerBanner>
      <ContainerCard>
        <FormSearch/>
      </ContainerCard>
    </ContainerPage>
  );
};

export default Cardapio;
