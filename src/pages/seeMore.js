import React, { useState } from "react";

//Components
import Avatar from "./../components/avatarComponent";
// import Cv from "./cvComponent";
// import Portfolio from "./portfolioComponent";
import Footer from "./../components/footerComponent";

// Images
// import Images from "./imagesComponent";

// FUNCTION
const SeeMore = () => {
  // UseState
  // const [buttonCv, setButtonCv] = useState(false);
  const [avatar, setAvatar] = useState(true);
  // const [buttonPortfolio, setButtonPortfolio] = useState(false);

  //   if (buttonCv === true) {
  //     return <Cv />;
  //   }

  //   if (buttonPortfolio === true) {
  //     return <Portfolio />;
  //   }

  return (
    <div className={"containerSeeMore"}>
      {"hello"}
      <Avatar />
      {/* <Images
        onClick={() => {
          setButtonCv(true);
        }}
        onClickP={() => {
          setButtonPortfolio(true);
        }}
      /> */}
      <Footer value={"This site is realized in REACT"} />
    </div>
  );
};

export default SeeMore;
