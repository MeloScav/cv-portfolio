import React from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "./../components/footerComponent";
import Button from "./../components/buttonComponent";

// Images
import TicTacToe from "./../assets/tic-tac-toe.png";
import CasseBriques from "./../assets/casse-briques.png";
import TrouvKach from "./../assets/trouvkach.png";
import AchilleEtMargaux from "./../assets/achille-et-margaux.png";
import GregorPotter from "./../assets/gregor-potter.png";
import ClimActes from "./../assets/climactes.png";

const PortfolioPage = () => {
  return (
    <div className={"containerPortofolio"}>
      <h1>{"Portfolio"}</h1>

      <div className={"containerImg"}>
        <a className={"boxImg"} href={"https://www.climactes.org/"}>
          <img src={ClimActes} alt="ClimActes" />
          <div className={"hover-portfolio"}>
            <h2>{"ClimActes"}</h2>
            <p>
              {
                "Participation in the development of a website for a summer university to act on the climate (internship)"
              }
            </p>
          </div>
        </a>

        <a className={"boxImg"} href={"https://www.gregorpotter.com/"}>
          <img src={GregorPotter} alt="Gregor Potter" />
          <div className={"hover-portfolio"}>
            <h2>{"Gregor Potter"}</h2>
            <p>
              {
                "Participation in the development of a website for a Belgium DJ (internship)"
              }
            </p>
          </div>
        </a>

        <a className={"boxImg"} href={"https://www.achillemargaux.be/"}>
          <img src={AchilleEtMargaux} alt="Achille et Margaux" />
          <div className={"hover-portfolio"}>
            <h2>{"Achille & Margaux"}</h2>
            <p>
              {
                "Participation in the development of a website for a real estate agency (internship)"
              }
            </p>
          </div>
        </a>

        <a className={"boxImg"} href={"https://trouvkach-6.herokuapp.com/"}>
          <img src={TrouvKach} alt="Trouvkach" />
          <div className={"hover-portfolio"}>
            <h2>{"TrouvKach"}</h2>
            <p>{"Application to find a bank (REACT)"}</p>
          </div>
        </a>

        <a
          className={"boxImg"}
          href={"https://meloscav.github.io/Jeu-Tic-tac-toe-/"}
        >
          <img src={TicTacToe} alt="TicTacToe" />
          <div className={"hover-portfolio"}>
            <h2>{"Tic Tac Toe"}</h2>
            <p>{"(CANVAS)"}</p>
          </div>
        </a>

        <a
          className={"boxImg"}
          href={"https://meloscav.github.io/Jeu-casse-briques/"}
        >
          <img src={CasseBriques} alt="CasseBriques" />
          <div className={"hover-portfolio"}>
            <h2>{"Casse briques"}</h2>
            <p>{"(CANVAS)"}</p>
          </div>
        </a>
      </div>

      <div className={"buttons"}>
        <Link className={"buttonReturn"} to={"/seeMore"}>
          {"Return"}
        </Link>
        <Link className={"buttonCv"} to={"/cv"}>
          {"Cv"}
        </Link>
      </div>
      <Footer value={"This site is realized in REACT"} />
    </div>
  );
};

export default PortfolioPage;
