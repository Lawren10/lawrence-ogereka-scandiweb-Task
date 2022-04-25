import React, { Component } from "react";
// import Link from "react-router-dom";
import { NavButton } from "../../styled-compomets/Navcomp-styles";
import { connect } from "react-redux";
import { getCategory } from "../../redux/asyncQueries";
import { ShopLink } from "../../styled-compomets/Global-style-theme";

export class CategoriesNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      all: "Active",
      clothes: "",
      tech: "",
    };
  }
  componentDidMount() {
    this.props.getCategory("all");
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

  render() {
    let { all, clothes, tech } = this.state;
    return (
      <section>
        <ShopLink to="/">
          <NavButton
            id="all"
            active={all}
            onClick={(e) => {
              this.activate(e);
            }}
          >
            All
          </NavButton>
        </ShopLink>
        <ShopLink to="/">
          <NavButton
            id="clothes"
            active={clothes}
            onClick={(e) => {
              this.activate(e);
            }}
          >
            Clothes
          </NavButton>
        </ShopLink>

        <ShopLink to="/">
          <NavButton
            id="tech"
            active={tech}
            onClick={(e) => {
              this.activate(e);
            }}
          >
            Tech
          </NavButton>
        </ShopLink>
      </section>
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

export default connect(null, mapDispatchToProps)(CategoriesNav);
