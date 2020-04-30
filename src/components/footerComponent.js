import React from "react";

const FooterComponent = (props) => {
  return (
    <div className={"footerContainer"}>
      <div className={"footerContent"}>
        <p>{props.value}</p>
        <p>© Scavezzoni Méloé - meloscavezzoni@gmail.com </p>
      </div>
    </div>
  );
};

export default FooterComponent;
