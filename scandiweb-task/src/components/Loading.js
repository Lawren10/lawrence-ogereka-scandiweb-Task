import React, { Component } from "react";
import {
  LoaderWrap,
  AnimateLoader,
} from "../styled-compomets/Global-style-theme";
import logo from "../asset/a-logo.png";

export class Loading extends Component {
  render() {
    return (
      <LoaderWrap>
        <AnimateLoader>
          <img src={logo} alt="logo" style={{ marginLeft: "auto" }}></img>
        </AnimateLoader>
      </LoaderWrap>
    );
  }
}

export default Loading;
