import React, { useState, useEffect, useContext } from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import Card from "../../components/Card";
import FormSearch from "../../components/FormSearch";
import {
  CardBox,
  ContainerBanner,
  ContainerCard,
  ContainerPage,
  Title,
} from "../../styles/globalStyles";
import { getProdutos } from '../../services/api'
import ModalDelete from "../../components/ModalDelete";
import LoadAnimation from "../../components/LoadAnimation";

const Cardapio = () => {
  const { login, setView, view } = useContext(OwlsBarContext);

  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState([]);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const results = infos.filter((item) => {
    if (value === "") {
      return item;
    } else if (item.produto.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });

  const handleLoadReq = async () => {
    setInfos(await getProdutos())
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    handleLoadReq();
  }, []);

  useEffect(() => {
    if (view) {
      handleLoadReq();
      setView(false)
    }
  }, [view]);

  

  return (
    <>
      <ModalDelete
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedProduct={selectedProduct}
      />
      <ContainerPage>
        <ContainerBanner>
          <Title>Cardápio</Title>
        </ContainerBanner>
        <ContainerCard>
          <FormSearch value={value} handleChange={handleChange} login={login} />
          {loading ? (
            <LoadAnimation />
          ) : (
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
                      setIsOpen={setIsOpen}
                      endPoint={`/edit/${item.produto}`}
                      setSelectedProduct={setSelectedProduct}
                      login={login}
                    />
                  );
                })}
            </CardBox>
          )}
        </ContainerCard>
      </ContainerPage>
    </>
  );
};

export default Cardapio;
