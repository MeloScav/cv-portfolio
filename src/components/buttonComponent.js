import React from "react";

const style = {
  backgroundColor: "transparent",
  color: "white",
};

const Button = (props) => {
  return (
    <>
      <button
        style={style}
        type="button"
        className={props.class}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </>
  );
};

export default Button;
