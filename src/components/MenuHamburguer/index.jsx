import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import NavBar from "../NavBar";
import { useEffect } from "react";

export function MenuHamburguer({ handleMenu,menu }) {
  useEffect(() => {
    document.body.style.overflowY = menu ? "hidden" : "auto";
  }, [menu]);

  return (
    <Container isVisible={menu}>
      <IoClose className="close" size={45} onClick={handleMenu} />
      <NavBar column gap none handleMenu={handleMenu}/>
    </Container>
  );
}
