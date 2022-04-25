import React, { Component } from "react";
import {
  NavWrapper,
  CurrCartWrap,
} from "../../styled-compomets/Navcomp-styles";
import CategoriesNav from "./Categories-nav";
import CurrencyNav from "./Currency-nav";
import CartNav from "./CartNav";
import logo from "../../asset/a-logo.png";

export class Navcomp extends Component {
  render() {
    return (
      <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <NavWrapper>
          <CategoriesNav />
          <img src={logo} alt="logo" style={{ marginLeft: "auto" }}></img>
          <CurrCartWrap>
            <CurrencyNav />
            <CartNav />
          </CurrCartWrap>
        </NavWrapper>
      </div>
    );
  }
}

export default Navcomp;
