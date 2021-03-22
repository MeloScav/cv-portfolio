import React from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "./../components/footerComponent";
import Button from "./../components/buttonComponent";

// Images
import Me from "./../assets/photoCV.jpg";

const CvFrComponent = (props) => {
  return (
    <div className={"containerCv"}>
      <div className={"containerButtonLang"}>
        <Button
          class="buttonLanguage"
          onClick={props.onClickLanguage}
          value={"English"}
        />
      </div>
      <div className={"blockHead"}>
        <h1>{"< Scavezzoni Méloé />"} </h1>
        <h3>{"Développeur web front-end"} </h3>
      </div>

      <div className={"blocAbout"}>
        <div className={"picture"}>
          <img className={"imgMe"} src={Me} alt="me" />
        </div>

        <div className={"about"}>
          <h2>{"A propos de moi"}</h2>
          <p>
            {
              "Diplômée en tant qu'assistante vétérinaire et passionnée par le développement web, j'ai décidé de commencer une reconversion pour devenir développeur web. Ce que j'ai réussi grâce à BeCode Liège."
            }
          </p>
          <p>
            {
              "À la suite de ces expériences, j'ai pu acquérir des qualités essentielles en entreprise telles que la gestion du stress, le travail en groupe, l'apprentissage autodidacte, etc."
            }
          </p>
        </div>
      </div>
      {/*    SKILLS    */}
      <div className={"blocSkills"}>
        <h2>{"Compétences"}</h2>
        <div className={"skills"}>
          <div className={"skillTop"}>
            <canvas
              ref={props.refCanvas}
              id={props.goodKnowledge}
              width="140"
              heigth="110"
            >
              {"canvas: Good knowledge"}
            </canvas>
            <p>{"HTML / HTML5"}</p>
            <p>{"CSS / CSS3"}</p>
            <p>{"SCSS"}</p>
            <p>{"JavaScript"}</p>
            <p>{"React"}</p>
          </div>
          <div className={"skillMiddle"}>
            <canvas
              ref={props.refCanvas}
              id={props.middleKnowledge}
              width="140"
              heigth="110"
            >
              {"canvas: Middle knowledge"}
            </canvas>
            <p>{"Angular"}</p>
            <p>{"Git / GitHub"}</p>
            <p>{"Bootstrap"}</p>
            <p>{"Redux"}</p>
            <p>{"Adobe XD"}</p>
            <p>{"PHP"}</p>
            <p>{"phpMyAdmin"}</p>
          </div>
          <div className={"skillBasic"}>
            <canvas
              ref={props.refCanvas}
              id={props.basicKnowledge}
              width="140"
              heigth="110"
            >
              {"canvas: Basic knowledge"}
            </canvas>
            <p>{"MySQL"}</p>
            <p>{"TypeScript"}</p>
            <p>{"WordPress"}</p>
            <p>{"Parcel"}</p>
            <p>{"Webpack"}</p>
            <p>{"Balsamiq"}</p>
            <p>{"Figma"}</p>
          </div>
        </div>
      </div>

      {/*  Education */}
      <div className={"blocTraining"}>
        <h2>{"Education"}</h2>
        <div className={"trainingBecode"}>
          <div className={"titleTrainingBecode"}>{"Becode Liège"}</div>
          <div className={"dateTrainingBecode"}>{"2019"}</div>
          <div className={"descriptionTrainingBecode"}>
            {"Formation en développement web"}
          </div>
        </div>
        <div className={"fleronTraining"}>
          <div className={"titleTrainingFleron"}>{"IEPS de Fléron "}</div>
          <div className={"dateTrainingFleron"}>{"2015-2017"}</div>
          <div className={"descriptionTrainingFleron"}>
            {"Diplômée en tant qu'assistante vétérinaire"}
          </div>
        </div>
        <div className={"saintJacques"}>
          <div className={"titleTrainingSJ"}>{"Lycée Saint-Jacques"}</div>
          <div className={"dateTrainingSJ"}>{"2012"}</div>
          <div className={"descriptionTrainingSJ"}>
            {"Diplômée du secondaire général (CESS)"}
          </div>
        </div>
      </div>

      {/*   EXPERIENCES   */}
      <div className={"blocXp"}>
        <h2>{"Expérience"}</h2>

        <div className={"stageWad"}>
          <div className={"xp"}>{"Stage chez WebaDev"}</div>
          <div className={"separator"}></div>
          <div className={"date"}>{"Décembre 2019 - Février 2020"}</div>
        </div>

        <div className={"hackathonW"}>
          <div className={"date"}>2019</div>
          <div className={"separator"}></div>
          <div className={"xp"}>{"Hackathon WeCargo"}</div>
        </div>

        <div className={"becode"}>
          <div className={"xp"}>
            {
              "Création de site web, utilisation de Git/Github,apprentissage autodidacte de différents langages."
            }
          </div>
          <div className={"separator"}></div>
          <div className={"date"}>2019</div>
        </div>

        <div className={"job"}>
          <div className={"date"}>2018</div>
          <div className={"separator"}></div>
          <div className={"xp"}>
            {"Cdd caissier/réassortisseur à Primark Liège"}
          </div>
        </div>
        <div className={"stagevete2"}>
          <div className={"xp"}>
            {"Stage de fin d'étude au centre vétérinaire Triovet"}
          </div>
          <div className={"separator"}></div>
          <div className={"date"}>2017</div>
        </div>
        <div className={"stageVete1"}>
          <div className={"date"}>{"2016"}</div>
          <div className={"separator"}></div>
          <div className={"xp"}>
            {"Stage au cabinet vétérinaire du Dr Catherine Bande"}
          </div>
        </div>
        <div className={"jobStudent"}>
          <div className={"xp"}>
            {"Agent d'accueil au Carrefour de Fléron (Job étudiant)"}
          </div>
          <div className={"separator"}></div>
          <div className={"date"}>{"2013"}</div>
        </div>
        <div className={"jobStudentRetho"}>
          <div className={"date"}>{"2012"}</div>
          <div className={"separator"}></div>
          <div className={"xp"}>{"Assistante primaire à George Mignon"}</div>
        </div>
      </div>
      <div className={"download"}>
        <a
          href="https://github.com/MeloScav/cv-portfolio/raw/master/CV-SCAVEZZONI-Meloe.pdf"
          download="CV-SCAVEZZONI-Meloe"
        >
          <button type={"button"}>{"Télécharger le CV en pdf"} </button>
        </a>
      </div>
      <div className={"containerLink"}>
        <Link className={"buttonReturn"} to={"/seeMore"}>
          {"Return"}
        </Link>
        <Link className={"buttonPortfolio"} to={"/portfolio"}>
          {"Portfolio"}
        </Link>
      </div>
      <Footer value={"Ce site a été réalisé avec REACT"} />
    </div>
  );
};

export default CvFrComponent;
