import React from "react";

//Components
import Avatar from "../components/avatarComponent";
import Footer from "../components/footerComponent";

// Images
import Images from "./../components/imagesComponent";

// FUNCTION
const SeeMorePage = () => {
  return (
    <div className={"containerSeeMore"}>
      <Avatar />
      <Images />
      <Footer value={"This site is realized in REACT"} />
    </div>
  );
};

export default SeeMorePage;
