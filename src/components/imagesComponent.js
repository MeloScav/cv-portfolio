import React from "react";

// Images
import Me from "./../assets/photoCV.jpg";
import PortFolio from "./../assets/portFolio.jpg";

// FUNCTION
const imagesComponent = () => {
  return (
    <div className={"containerBox"}>
      <a href={"javascript:;"} className={"box"}>
        <img src={Me} alt={"Méloé Scavezzoni"} />
        <div className={"hover-content"}>
          <h2>{"Curriculum vitae"}</h2>
          <p>{"Scavezzoni Méloé"}</p>
        </div>
      </a>

      <a href={"javascript:;"} className={"box"}>
        <img src={PortFolio} alt={"Portfolio"} />
        <div className={"hover-content"}>
          <h2>{"PortFolio"}</h2>
          <p>{"Scavezzoni Méloé"}</p>
        </div>
      </a>
    </div>
  );
};

export default imagesComponent;
