import React, { Component } from "react";
import {
  NavWrapper,
  CurrCartWrap,
  LogoWrap,
  Nav,
} from "../../styled-compomets/Navcomp-styles";
import CategoriesNav from "./Categories-nav";
import CurrencyNav from "./Currency-nav";
import CartNav from "./CartNav";
import logo from "../../asset/a-logo.png";

export class Navcomp extends Component {
  render() {
    return (
      <Nav>
        <NavWrapper>
          <CategoriesNav />
          <LogoWrap>
            <img src={logo} alt="logo"></img>
          </LogoWrap>
          <CurrCartWrap>
            <CurrencyNav />
            <CartNav />
          </CurrCartWrap>
        </NavWrapper>
      </Nav>
    );
  }
}

export default Navcomp;
