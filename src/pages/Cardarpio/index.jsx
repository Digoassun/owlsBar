import React, { useState, useEffect, useContext } from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import Card from "../../components/Card";
import FormSearch from "../../components/FormSearch";
import {
  Title,
} from "../../styles/globalStyles";
import { getProdutos } from "../../services/api";
import ModalDelete from "../../components/ModalDelete";
import LoadAnimation from "../../components/LoadAnimation";
import { ContainerPage } from "./style";

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

  const handleReqProduto = async () => {
    const value = await getProdutos();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setInfos(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    handleReqProduto();
  }, []);

  useEffect(() => {
    if (view) {
      handleReqProduto();
      setView(false);
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
        <section className="banner">
          <Title>Cardápio</Title>
        </section>
        <section className='containerCard'>
          <FormSearch value={value} handleChange={handleChange} login={login} />
          {loading ? (
            <LoadAnimation />
          ) : (
            <section className="cardBox">
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
            </section>
          )}
        </section>
      </ContainerPage>
    </>
  );
};

export default Cardapio;
