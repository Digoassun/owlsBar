import styled from "styled-components";

export const Animation = styled.section `
    position: relative;
    height: 120px;
    width: 120px;
    margin-top: 10%;

    .box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 6px solid #313236;
  border-top-color: #994B22;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: is-rotating 2s linear infinite;  
  position: absolute;
}


.logoBox{
  margin-top: 10px;
  margin-left: 10px;
}

.boxMoon {
  position: absolute;
  animation: moon 1.5s ease-in-out;
  animation-delay: 1s;
}

.boxOwl {
  position: absolute;
  animation: owl 1.5s ease-in 1s;
}

.texto {
  font-family: 'Sancreek', cursive;
}

@keyframes moon {
  0% {
    scale: 0;
  }

  80% {
    scale: 1.1;
  }

  100% {
    scale: 1;
  }
}

@keyframes owl {
  0% {
    opacity: 0;
    scale: 0;
  }

  30% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    scale: 1;
  }
}

@keyframes is-rotating {
  
  to {
    transform: rotate(1turn);
    
  }
}
`