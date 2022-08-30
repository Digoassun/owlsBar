import React from "react";
import { GoTrashcan } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { CardBox, CardStyle } from "./styles";

const Card = ({ img, produto, desc, preco }) => {
  return (
    <CardBox>
      <CardStyle>
        <figure>
          <img src={img} alt="produto" />
          {/* <i>
        <GoTrashcan size={30}/>
        </i> */}
        </figure>
        <div className="infos">
          <h3>{produto}Produto</h3>
          <p>{desc} Melhor Produto da região trust</p>
          <div className="editPrice">
            <i>
              <BsPencilSquare size={30} />
            </i>
            <h4>
              a partir de:<span>R${preco}7,90</span>
            </h4>
          </div>
        </div>
      </CardStyle>
    </CardBox>
  );
};

export default Card;
