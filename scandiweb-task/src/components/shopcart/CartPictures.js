import React, { Component } from "react";
import {
  CartPicContainer,
  PicButtonContainer,
  PicButton,
} from "../../styled-compomets/ShopCartStyles";
import { ItemPic } from "../../styled-compomets/shopItemStyles";

export class CartPictures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }

  changePic = (func, len) => {
    if (func === "inc") {
      if (this.state.num === len - 1) {
        return;
      }
      this.setState((prevstate) => (prevstate.num += 1));
    }

    if (func === "dec") {
      if (this.state.num === 0) {
        return;
      }
      this.setState((prevstate) => (prevstate.num -= 1));
    }
  };

  render() {
    let { gallery } = this.props;
    let length = gallery.length;

    return (
      <CartPicContainer>
        <ItemPic src={gallery[this.state.num]} />
        {length > 1 ? (
          <PicButtonContainer>
            <PicButton
              onClick={() => {
                this.changePic("dec", length);
              }}
            >
              {`<`}
            </PicButton>
            <PicButton
              onClick={() => {
                this.changePic("inc", length);
              }}
            >
              {`>`}
            </PicButton>
          </PicButtonContainer>
        ) : (
          ""
        )}
      </CartPicContainer>
    );
  }
}

export default CartPictures;
