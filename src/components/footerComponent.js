import React from "react";

// STYLES
const styleBloc = {
  marginTop: "20px",
  marginBottom: "20px",
};
const styleFooter = {
  color: "white",
  width: "80%",
  textAlign: "center",
  borderTop: "1px solid rgba(240, 226, 223, 0.5)",
  margin: "0 auto",
};

const FooterComponent = (props) => {
  return (
    <div style={styleBloc}>
      <div style={styleFooter}>
        <p>{props.value}</p>
        <p>© Scavezzoni Méloé - meloscavezzoni@gmail.com </p>
      </div>
    </div>
  );
};

export default FooterComponent;
