import React, { Component } from "react";
import {
  LoaderWrap,
  AnimateLoader,
  LoadingImage,
} from "../styled-compomets/Global-style-theme";
import logo from "../asset/a-logo.png";

export class Loading extends Component {
  render() {
    return (
      <LoaderWrap>
        <AnimateLoader>
          <LoadingImage src={logo} alt="logo"></LoadingImage>
        </AnimateLoader>
      </LoaderWrap>
    );
  }
}

export default Loading;
