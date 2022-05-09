import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}

body{
 width:100vw;
 overflow-x:hidden;
 font-family:'Raleway', sans-serif;
 color:#1d1f22;
}
`;

export const ShopLink = styled(Link)`
  color: #1d1f22;
  text-decoration: none;
`;

export const LoaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: grid;
  place-content: center;
`;

const Animate = keyframes`
from {
    transform: scale(0.5);
  }

  to {
    transform:scale(1.5);
  }
`;

export const AnimateLoader = styled.div`
  animation: ${Animate} 0.5s linear alternate infinite;
`;
