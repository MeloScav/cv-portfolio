import React from "react";
import { Link } from "react-router-dom";

// Images
import Me from "./../assets/photoCV.jpg";
import PortFolio from "./../assets/portFolio.jpg";

// FUNCTION
const imagesComponent = () => {
  return (
    <div className={"containerBox"}>
      <Link className={"box"} to={"/cv"}>
        <img src={Me} alt={"Méloé Scavezzoni"} />
        <div className={"hover-content"}>
          <h2>{"Curriculum vitae"}</h2>
          <p>{"Scavezzoni Méloé"}</p>
        </div>
      </Link>

      <Link className={"box"} to={"portfolio"}>
        <img src={PortFolio} alt={"Portfolio"} />
        <div className={"hover-content"}>
          <h2>{"PortFolio"}</h2>
          <p>{"Scavezzoni Méloé"}</p>
        </div>
      </Link>
    </div>
  );
};

export default imagesComponent;
