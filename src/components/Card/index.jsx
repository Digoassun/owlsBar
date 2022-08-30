import React from "react";
import { GoTrashcan } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { CardStyle } from "./styles";

const Card = ({ img, produto, desc, preco }) => {
  return (
    <CardStyle>
      <figure>
        <img src={img} alt="produto" />
        {/* <i>
        <GoTrashcan size={30}/>
        </i> */}
      </figure>
      <div className="infos">
        <h3>{produto.toUpperCase()}</h3>
        <p>{desc}</p>
        <div className="editPrice">
          <i>
            <BsPencilSquare size={30} />
          </i>
          <h4>
            a partir de:<span>R${preco}</span>
          </h4>
        </div>
      </div>
    </CardStyle>
  );
};

export default Card;
