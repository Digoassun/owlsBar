import styled from "styled-components";

export const StyledBeer = styled.div `

    position: relative;

.beer, .bubble, .smallB, .drip {
    position: absolute;
}
.bubble, .smallB, .drip {
    background: white;
}
.bubble, .smallB {
    border-radius: 100%;
}

.mug {
    position: relative;
    width: 20vmin;
    height: 32vmin;
    background: #eef5f8;
    border-radius: 2vmin;
}
.mug:before, .mug:after {
    position: absolute;
    content: '';
}
.mug:before {
    z-index: -2;
    left: 12vmin;
    top: 6vmin;
    width: 15vmin;
    height: 17vmin;
    border-radius: 19%;
    background: #eef5f8;
}
.mug:after {
    z-index: -1;
    width: 12vmin;
    height: 13vmin;
    top: 8vmin;
    left: 13vmin;
    background: #1f1f1f;
    border-radius: 19%;
}
.beer {
    top: 2vmin;
    left: 2vmin;
    width: 16vmin;
    height: 28vmin;
    background: #ffd36d;
    border-radius: 1vmin;
}
.beer:before, .beer:after {
    position: absolute;
    content: '';
    background: #ffc849;
    border-radius: 100%;
}
.beer:before {
    animation: 4s up infinite;
    width: 2vmin;
    height: 2vmin;
    bottom: 2vmin;
    left: 5vmin;
    box-shadow: 7vmin -15vmin 0 #ffc849, 4vmin -10vmin 0 #ffc849, 6vmin -3vmin 0 #ffc849;
}
.beer:after {
    animation: 4s up infinite;
    width: 1.5vmin;
    height: 1.5vmin;
    bottom: 6vmin;
    left: 7vmin;
    box-shadow: -3vmin -8vmin 0 #ffc849, 7vmin -5vmin 0 #ffc849;
}
.bubble {
    width: 10vmin;
    height: 10vmin;
    top: -5vmin;
    left: -3vmin;
}
.bubble:before, .bubble:after {
    position: absolute;
    content: '';
    background: white;
    border-radius: 100%;
}
.bubble:before {
    width: 12vmin;
    height: 12vmin;
    left: 5vmin;
    top: -2vmin;
}
.bubble:after {
    width: 10vmin;
    height: 10vmin;
    left: 14vmin;
    top: 0vmin;
}
.smallB {
    width: 5vmin;
    height: 5vmin;
    top: -7vmin;
    left: 11vmin;
}
.smallB:before, .smallB:after {
    position: absolute;
    content: '';
    border-radius: 100%;
    background: white;
}
.smallB:before {
    width: 3vmin;
    height: 3vmin;
    top: -6vmin;
    left: -3vmin;
}
.smallB:after {
    width: 3vmin;
    height: 3vmin;
    top: -8vmin;
    left: -8vmin;
}
.drip {
    width: 5vmin;
    height: 14vmin;
    top: 1vmin;
    border-radius: 100px;
    left: -2vmin;
    box-shadow: 4vmin -6vmin 0 white;
    animation: 6s drip infinite;
}
@keyframes up {
    0% {
        transform: translateY(0px);
   }
    99% {
        transform: translateY(-70px);
   }
    100% {
        opacity: 0;
   }
}
@keyframes drip {
    0% {
        transform: translateY(0px);
   }
    100% {
        height: 25vmin;
   }
}
`