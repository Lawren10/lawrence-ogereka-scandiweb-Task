import React, { Component } from "react";
import {
  NavCurrencyBtn,
  NavCurrencyList,
  NavCurrencyItem,
  NavCurrSelectBtn,
} from "../../styled-compomets/Navcomp-styles";
import { connect } from "react-redux";
import { getCurrencies } from "../../redux/asyncQueries";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Action } from "../../redux/storereducer";

const { setCurrency, setShopCurrency } = Action;

export class CurrencyNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.props.getCurrencies();
  }

  updateShopCurrency = (symbol) => {
    let Symbol = symbol;
    let editProd = this.props.products;
    let allPrices = [];

    let currencyPrices = {};
    editProd.forEach((element) => {
      let { prices, id } = element;
      allPrices.push({ id, prices });
    });

    allPrices.forEach((element) => {
      let { id, prices } = element;
      let prodPrice = prices.filter((e) => e.currency.symbol === Symbol);
      currencyPrices[id] = { ...prodPrice[0] };
    });

    this.props.setShopCurrency(currencyPrices);
    // console.log(currencyPrices);
  };

  render() {
    let { currencies, selectedCurrency, setCurrency } = this.props;

    return (
      <div>
        <NavCurrencyBtn>
          <NavCurrSelectBtn
            onClick={() => {
              this.setState({ ...this.state, show: !this.state.show });
            }}
          >
            <div>{selectedCurrency}</div>
            {!this.state.show ? <BiChevronDown /> : <BiChevronUp />}
          </NavCurrSelectBtn>
          <NavCurrencyList show={this.state.show}>
            {currencies.map((item, index) => {
              return (
                <NavCurrencyItem
                  key={item.label}
                  id={item.symbol}
                  onClick={(e) => {
                    setCurrency(item.symbol);
                    this.updateShopCurrency(item.symbol);
                  }}
                >
                  <span>{item.symbol}</span>
                  <span>{item.label}</span>
                </NavCurrencyItem>
              );
            })}
          </NavCurrencyList>
        </NavCurrencyBtn>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { currencies, prices, products } = state.shop;
  return {
    currencies: currencies.navCurrencies,
    selectedCurrency: currencies.selectedCurrency,
    prices: prices,
    products: products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrencies: () => {
      dispatch(getCurrencies());
    },
    setCurrency: (curr) => {
      dispatch(setCurrency(curr));
    },
    setShopCurrency: (curr) => {
      dispatch(setShopCurrency(curr));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyNav);
