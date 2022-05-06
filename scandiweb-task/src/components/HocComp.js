import React from "react";
import { useParams } from "react-router-dom";

const GetParmas = (Component) => {
  function HocComp(props) {
    const { id } = useParams();
    return <Component {...props} id={id}></Component>;
  }

  return HocComp;
};

export default GetParmas;
