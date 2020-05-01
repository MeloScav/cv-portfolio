import React, { useState, useEffect, useRef } from "react";

// Components
// import Footer from "./../components/footerComponent";
// import Button from "./../components/buttonComponent";
// import SeeMore from "./seeMoreComponent";
// import Portfolio from "./portfolioComponent";
import CvFr from "./../components/cvFrComponent";
import CvEn from "./../components/cvEnComponent";

// Images
// import Me from "./../assets/photoCV.jpg";

const CvPage = () => {
  let ref = useRef();
  // UseState
  // const [buttonReturn, setButtonReturn] = useState(false);
  // const [buttonPortfolio, setButtonPortfolio] = useState(false);
  const [buttonLanguage, setButtonLanguage] = useState(false);

  // UseEffect CANVAS
  useEffect(() => {
    const drawCanvas = (id, percent, textOne, textTwo) => {
      const canvas = document.getElementById(id);
      const context = canvas.getContext("2d");

      // Radian calculations
      let startingAngle = Math.PI * 1.5;
      let endAngle = (percent * Math.PI) / 50 + startingAngle;

      context.clearRect(0, 0, canvas.width, canvas.height);
      // draw
      context.beginPath();
      context.lineWidth = 7;
      context.strokeStyle = "red";
      context.arc(70, 70, 65, startingAngle, endAngle, false);
      context.stroke();

      // text
      context.font = "bold 18px Arial";
      context.textAlign = "center";
      context.fillStyle = "white";
      context.fillText(textOne, 70, 65);
      context.fillText(textTwo, 70, 85);
    };

    if (buttonLanguage === true) {
      drawCanvas("goodKnowledge", 90, "Bonne", "connaisance");
      drawCanvas("middleKnowledge", 60, "Connaisance", "moyenne");
      drawCanvas("basicKnowledge", 40, "Connaisance", "basique");
    } else {
      drawCanvas("goodKnowledge", 90, "Good", "knowledge");
      drawCanvas("middleKnowledge", 60, "Average", "knowledge");
      drawCanvas("basicKnowledge", 40, "Basic", "knowledge");
    }
  }, [buttonLanguage]);

  // if (buttonReturn === true) {
  //   return <SeeMore />;
  // }

  // if (buttonPortfolio === true) {
  //   return <Portfolio />;
  // }

  /*  FRANCAIS  */
  if (buttonLanguage === true) {
    return (
      <CvFr
        onClickLanguage={() => {
          setButtonLanguage(false);
        }}
        refCanvas={ref}
        goodKnowledge={"goodKnowledge"}
        middleKnowledge={"middleKnowledge"}
        basicKnowledge={"basicKnowledge"}
      />
    );
  }

  /*   ENGLISH    */
  return (
    <CvEn
      onClickLanguage={() => {
        setButtonLanguage(true);
      }}
      refCanvas={ref}
      goodKnowledge={"goodKnowledge"}
      middleKnowledge={"middleKnowledge"}
      basicKnowledge={"basicKnowledge"}
    />
  );
};

export default CvPage;
