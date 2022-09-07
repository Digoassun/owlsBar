import React from "react";
import { StyledBeer } from "./styles";

const Beer = () => {
  return (
    <StyledBeer>
      <div className="mug">
        <div className="beer"></div>
      </div>
      <div className="bubble"></div>
      <div className="smallB"></div>
      <div className="drip"></div>
    </StyledBeer>
  );
};

export default Beer;
