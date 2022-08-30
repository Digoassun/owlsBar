import React from "react";
import { GoTrashcan } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { CardStyle } from "./styles";
import { Link,useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const Card = ({ img, produto, desc, preco }) => {
  const navigate = useNavigate();

  const handleDelete = ()=>{
    api.delete(`menu/produto/${produto}`)
      .then((response) => {
        navigate("/cardapio");
      })
      .catch((error) => console.log(error));
  }

  return (
    <CardStyle>
      <figure>
        <img src={img} alt="produto" />
      </figure>
      <div className="infos">
        <h3>{produto.toUpperCase()}</h3>
        <p>{desc}</p>
        <div className="editPrice">
          <div className="icons">
            <Link to="/edit">
              <BsPencilSquare color={"#000"}size={25} />
            </Link>
            <GoTrashcan onClick={handleDelete} color={"#000"}size={25} />
          </div>
          <h4>
            a partir de:<span>R${preco}</span>
          </h4>
        </div>
      </div>
    </CardStyle>
  );
};

export default Card;
