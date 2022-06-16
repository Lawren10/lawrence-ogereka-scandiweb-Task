import React from "react";
import { useParams } from "react-router-dom";

const GetParmas = (Component) => {
  function HocComp(props) {
    const { id, name } = useParams();

    return <Component {...props} id={id} name={name}></Component>;
  }

  return HocComp;
};

export default GetParmas;
