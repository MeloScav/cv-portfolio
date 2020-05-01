import React from "react";

const ButtonComponent = (props) => {
  return (
    <div>
      <button type="button" className={props.class} onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default ButtonComponent;
