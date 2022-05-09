import React, { Component } from "react";
import {
  PicWrapper,
  PicListCont,
  LargeProductPicCont,
  SmallProductPicCont,
  ProductPic,
} from "../../styled-compomets/productDisplayStyle";

export class ProductPicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picLink: "",
    };
  }

  render() {
    let { gallery } = this.props;

    return (
      <PicWrapper>
        <PicListCont>
          {gallery &&
            gallery.map((picSrc, index) => {
              return (
                <SmallProductPicCont
                  key={index}
                  onClick={() => {
                    this.setState({ ...this.state, picLink: picSrc });
                  }}
                >
                  <ProductPic src={picSrc} />
                </SmallProductPicCont>
              );
            })}
        </PicListCont>

        <LargeProductPicCont>
          <ProductPic
            src={this.state.picLink || `${gallery ? gallery[0] : ""}`}
          />
        </LargeProductPicCont>
      </PicWrapper>
    );
  }
}

export default ProductPicture;
