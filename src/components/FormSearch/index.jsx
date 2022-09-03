import React,{useContext} from "react";
import { OwlsBarContext } from "../../context/OwlsBarProvider";
import { BtnSearch, FormStyled } from "./styles";
import { Link } from "react-router-dom";


const FormSearch = ({value, handleChange}) => {
  const { login } = useContext(OwlsBarContext);

  return (
    <FormStyled>
      <input onChange={handleChange} value={value} type="text" placeholder="O que você está procurando?" />
      <Link to="/adicionar">
        {!login?'':<BtnSearch >Adicionar</BtnSearch>}      
      </Link>
    </FormStyled>
  );
};

export default FormSearch;
