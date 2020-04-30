import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

// Import pages
import SeeMore from "./seeMore";

// Import components
import Button from "./../components/buttonComponent";

// SVG
import GithubSVG from "./../components/SVG/githubSVG";
import LinkedinSVG from "./../components/SVG/linkedinSVG";

// FUNCTION
const HomePage = () => {
  // Constant variables
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  // UseState
  const [buttonMove, setButtonMove] = useState(false);
  const [buttonSeeMore, setButtonSeeMore] = useState(false);

  // Selection of all buttons with selector ".social"
  const className = "clicked";
  const element = window.document.querySelectorAll(".social");
  if (buttonMove === true) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.toggle(className);
    }
    return setButtonMove(false);
  }

  // Button see more
  //   if (buttonSeeMore === true) {
  //     return <SeeMore />;
  //   }

  return (
    <div className="block">
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        onClick={() => {
          setButtonMove(true);
        }}
      />

      <div className="divButtons">
        <GithubSVG />
        <LinkedinSVG />
        <Link className={"social moveLink"} to={"/seeMore"}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
