import React, { useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import { CardStyle } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
// import ModalDelete from "../ModalDelete";
import { Dialog } from '@headlessui/react'

const Card = ({ img, produto, desc, preco }) => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const handleDelete = () => {
    api
      .delete(`menu/produto/${produto}`)
      .then((response) => {
        navigate("/cardapio");
      })
      .catch((error) => console.log(error));
  };

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
              <BsPencilSquare color={"#000"} size={25} />
            </Link>
            <GoTrashcan color={"#000"} size={25}>
              <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel>
                  <Dialog.Title>Deactivate account</Dialog.Title>
                  <Dialog.Description>
                    This will permanently deactivate your account
                  </Dialog.Description>

                  <p>
                    Are you sure you want to deactivate your account? All of
                    your data will be permanently removed. This action cannot be
                    undone.
                  </p>

                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                  <button>Deactivate</button>
                </Dialog.Panel>
              </Dialog>
            </GoTrashcan>
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
