import React from "react";
import { GoTrashcan } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { CardStyle } from "./styles";

const Card = ({ img, produto, desc, preco }) => {
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
            <BsPencilSquare size={25} />
            <GoTrashcan className="trash" size={25} />
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
