import React from "react";
import { DivInfos } from "./styles";

const Infos = ({ children }) => {
  return (
    <DivInfos>
      <p>{children}</p>
      <p>{children}</p>
      <p>{children}</p>
      <p>{children}</p>
    </DivInfos>
  );
};

export default Infos;
