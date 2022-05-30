import React, { Component } from "react";
import {
  NavCurrencyBtn,
  NavCurrencyList,
  NavCurrencyItem,
  NavCurrSelectBtn,
  CurrencyItem,
} from "../../styled-compomets/Navcomp-styles";
import { connect } from "react-redux";
import { getCurrencies } from "../../redux/asyncQueries";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Action } from "../../redux/storereducer";

const { setCurrency, setShopCurrency } = Action;

export class CurrencyNav extends Component {
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
  };

  render() {
    let { currencies, selectedCurrency, setCurrency, showCurrencyList } =
      this.props;

    return (
      <div>
        <NavCurrencyBtn id={"currencyBtn"}>
          <NavCurrSelectBtn>
            <div id={"currencyBtn"}>{selectedCurrency}</div>
            {!showCurrencyList ? <BiChevronDown /> : <BiChevronUp />}
          </NavCurrSelectBtn>
          <NavCurrencyList show={showCurrencyList}>
            {currencies.map((item, index) => {
              return (
                <NavCurrencyItem
                  className={"currencyItem"}
                  key={item.label}
                  id={item.symbol}
                  onClick={(e) => {
                    setCurrency(item.symbol);
                    this.updateShopCurrency(item.symbol);
                  }}
                >
                  <CurrencyItem>{item.symbol}</CurrencyItem>
                  <CurrencyItem>{item.label}</CurrencyItem>
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
  let { currencies, prices, products, showCurrencyList } = state.shop;
  return {
    currencies: currencies.navCurrencies,
    selectedCurrency: currencies.selectedCurrency,
    prices: prices,
    products: products,
    showCurrencyList,
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
