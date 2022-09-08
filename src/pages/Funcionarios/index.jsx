import React, { useState, useContext, useEffect } from "react";
import CardFuncionario from "../../components/CardFuncionario";
import { getFuncionarios } from "../../services/api";
import { FuncionariosContainer, TitleFuncionarios } from "./styles";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import ModalDelete from "../../components/ModalDelete";
import { ToastContainer } from "react-toastify";
const Funcionarios = () => {
  const { setView, view } = useContext(OwlsBarContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFuncionario, setSelectedFuncionario] = useState("");
  const [infosFuncionario, setInfosFuncionario] = useState([]);

  const handleReqFuncionario = async () => {
    try {
      setInfosFuncionario(await getFuncionarios());
    } catch (error) {
      console.error(error);
      reqFailed();
    }
  };

  useEffect(() => {
    handleReqFuncionario();
  }, []);

  useEffect(() => {
    if (view) {
      handleReqFuncionario();
      setView(false);
    }
  }, [view]);

  return (
    <>
      <ModalDelete
        infosFuncionario={infosFuncionario}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedFuncionario={selectedFuncionario}
      />
      <FuncionariosContainer>
        <div className="containerFuncionarios">
          <TitleFuncionarios>Funcionários</TitleFuncionarios>
          <div className="divCard">
            {infosFuncionario.length > 0 &&
              infosFuncionario.map((item, index) => {
                return (
                  <CardFuncionario
                    key={index}
                    nome={item.nome}
                    senha={item.senha}
                    login={item.login}
                    infosFuncionario={infosFuncionario}
                    setSelectedFuncionario={setSelectedFuncionario}
                    setIsOpen={setIsOpen}
                  />
                );
              })}
          </div>
        </div>
      </FuncionariosContainer>
      <ToastContainer />
    </>
  );
};

export default Funcionarios;
