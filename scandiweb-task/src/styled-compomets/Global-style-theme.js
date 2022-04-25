import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
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
