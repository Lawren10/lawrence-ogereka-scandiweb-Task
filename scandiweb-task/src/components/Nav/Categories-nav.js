import React, { Component } from "react";
// import Link from "react-router-dom";
import {
  NavButton,
  CategoriesNavWrap,
} from "../../styled-compomets/Navcomp-styles";
import { connect } from "react-redux";
import { getCategory } from "../../redux/asyncQueries";
import { ShopLink } from "../../styled-compomets/Global-style-theme";

export class CategoriesNav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this.props.getCategory("all");
  }

  componentDidUpdate() {
    let len = Object.keys(this.state).length;

    if (len <= 0 && this.props.navCategories.length > 0) {
      this.setStateObject(this.props.navCategories);
    }
  }

  activate = (e) => {
    let id = e.target.id;

    let newstate = {};
    for (let item in this.state) {
      if (item === id) {
        newstate[item] = "Active";
        continue;
      }
      newstate[item] = "";
    }

    this.setState({ ...newstate });
    this.props.getCategory(id);
  };

  setStateObject = (arr) => {
    let obj = {};
    arr.forEach((element, index) => {
      let { name } = element;
      if (index === 0) {
        obj[name] = "Active";
      } else {
        obj[name] = "";
      }
    });

    this.setState(obj);
  };

  render() {
    let { navCategories } = this.props;

    return (
      <CategoriesNavWrap>
        {navCategories.length &&
          navCategories.map((category, index) => {
            let { name } = category;

            return (
              <ShopLink to={`/${name}`} key={index}>
                <NavButton
                  id={name}
                  active={this.state[name]}
                  onClick={(e) => {
                    this.activate(e);
                  }}
                >
                  {name}
                </NavButton>
              </ShopLink>
            );
          })}
      </CategoriesNavWrap>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: (name) => {
      dispatch(getCategory(name));
    },
  };
};

const mapStateToProps = (state) => {
  let { navCategories } = state.shop;
  return {
    navCategories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav);
