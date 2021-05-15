import React from "react";

const Button = (props) => {
  return (
    <button type={props.type} className="button">
      {props.children}
    </button>
  );
};

export default Button;
