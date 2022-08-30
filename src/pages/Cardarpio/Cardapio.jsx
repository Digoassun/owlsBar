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
  const [value, setValue] = useState("");

  const results = infos.filter((item) => {
    if (value === "") {
      return item;
    } else if (item.produto.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });

    const handleLoadReq = () => {
    api.get("menu").then((response) => {
      setInfos(response.data.dados);
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
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
        <FormSearch
          value={value}
          handleChange={handleChange}
        />
        <CardBox>
          {infos.length > 0 &&
            results.map((item, index) => {
              return (
                <Card
                  key={index}
                  img={item.img}
                  produto={item.produto}
                  desc={item.descricao}
                  preco={item.valor}
                />
              );
            })
            }
        </CardBox>
      </ContainerCard>
    </ContainerPage>
  );
};

export default Cardapio;
