import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import FormSearch from "../../components/FormSearch";
import {
  CardBox,
  ContainerBanner,
  ContainerCard,
  ContainerPage,
  Title,
} from "../../components/UI";
import { api } from "../../services/api";

const Cardapio = () => {
  const [infos, setInfos] = useState([]);


  const handleLoadReq = () => {
    api.get("menu").then((response) => {
      setInfos(response.data.dados);
      console.log(response.data.dados);
    });
  };

  useEffect(() => {
    handleLoadReq();
  }, []);

  return (
    <ContainerPage>
      <ContainerBanner>
        <Title>Cardápio</Title>
      </ContainerBanner>
      <ContainerCard>
        <FormSearch/>
        <CardBox>
          {infos.length > 0 &&
            infos.map((item, index) => {
              return (
                <Card
                  key={index}
                  img={item.img}
                  produto={item.produto}
                  desc={item.descricao}
                  preco={item.valor}
                />
              );
            })}
        </CardBox>
      </ContainerCard>
    </ContainerPage>
  );
};

export default Cardapio;
