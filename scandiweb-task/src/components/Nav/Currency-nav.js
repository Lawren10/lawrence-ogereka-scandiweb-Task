import React, { Component } from "react";
import {
  NavCurrencyBtn,
  NavCurrencyList,
  NavCurrencyItem,
  NavCurrSelectBtn,
} from "../../styled-compomets/Navcomp-styles";
import { connect } from "react-redux";
import { getCurrencies } from "../../redux/asyncQueries";
import { BiChevronDown } from "react-icons/bi";
import { Action } from "../../redux/storereducer";

const { setCurrency } = Action;

export class CurrencyNav extends Component {
  componentDidMount() {
    this.props.getCurrencies();
  }

  setCurr = (e) => {
    // console.log(e.target.id);
    // this.props.setCurrency(e.target.id);
  };

  render() {
    let { currencies, selectedCurrency, setCurrency } = this.props;

    return (
      <div>
        <NavCurrencyBtn>
          <NavCurrSelectBtn>
            <div>{selectedCurrency || "$"}</div>
            <BiChevronDown />
          </NavCurrSelectBtn>
          <NavCurrencyList>
            {currencies.map((item, index) => {
              return (
                <NavCurrencyItem
                  key={item.label}
                  id={item.symbol}
                  onClick={(e) => {
                    setCurrency(item.symbol);
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
  let { currencies } = state.shop;
  return {
    currencies: currencies.navCurrencies,
    selectedCurrency: currencies.selectedCurrency,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyNav);
