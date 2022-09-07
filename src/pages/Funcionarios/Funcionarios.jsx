import React,{useState,useContext,useEffect} from "react";
import CardFuncionario from "../../components/CardFuncionario";
import { getFuncionarios } from "../../services/api";
import { FuncionariosContainer, TitleFuncionarios } from "./styles";
import { OwlsBarContext } from "../../context/OwlsBarProvider";


const Funcionarios = () => {
  const { setView, view } = useContext(OwlsBarContext);

  const [infos, setInfos] = useState([]);
  const handleReqFuncionario = async () => {
    setInfos(await getFuncionarios());
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
    <FuncionariosContainer>
      <div className="containerFuncionarios">
        <TitleFuncionarios>Funcionários</TitleFuncionarios>
        <div className="divCard">
          {infos.length > 0 &&
            infos.map((item, index) => {
              return (
                <CardFuncionario
                  key={index}
                  nome={item.nome}
                  senha={item.senha}
                  login={item.login}
                  // setIsOpen={setIsOpen}
                  // setSelectedProduct={setSelectedProduct}
                />
              );
            })}
        </div>
      </div>
    </FuncionariosContainer>
  );
};

export default Funcionarios;
