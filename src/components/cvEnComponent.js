import React from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "./../components/footerComponent";
import Button from "./../components/buttonComponent";

// Images
import Me from "./../assets/photoCV.jpg";

const CvEnComponent = (props) => {
  return (
    <div className={"containerCv"}>
      <div className={"containerButtonLang"}>
        <Button
          class="buttonLanguage"
          onClick={props.onClickLanguage}
          value={"Français"}
        />
      </div>
      <div className={"blockHead"}>
        <h1>{"< Scavezzoni Méloé />"} </h1>
        <h3>{"Frontend web developer"} </h3>
      </div>

      <div className={"blocAbout"}>
        <div className={"picture"}>
          <img className={"imgMe"} src={Me} alt="me" />
        </div>

        <div className={"about"}>
          <h2>{"About me"}</h2>
          <p>
            {
              "Graduated as a veterinary assistant and passionate about web development, I decided to make a reconversion to become a web developer. What I did with BeCode Liège."
            }
          </p>
          <p>
            {
              "Following these experiences, I was able to acquire essential qualities in business such as stress management, group work, autodidact learning, etc."
            }
          </p>
        </div>
      </div>
      {/*    SKILLS    */}
      <div className={"blocSkills"}>
        <h2>{"Skills"}</h2>
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
            <p>{"HTML/HRML5"}</p>
            <p>{"CSS/CSS3"}</p>
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
            <p>{"Canvas"}</p>
            <p>{"Git/GitHub"}</p>
            <p>{"Bootstrap"}</p>
            <p>{"Redux"}</p>
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
            <p>{"WordPress"}</p>
            <p>{"Parcel"}</p>
            <p>{"Webpack"}</p>
            <p>{"Balsamiq"}</p>
            <p>{"Figma"}</p>
            <p>{"PHP"}</p>
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
            {"Web development training"}
          </div>
        </div>
        <div className={"fleronTraining"}>
          <div className={"titleTrainingFleron"}>{"Fléron's IEPS"}</div>
          <div className={"dateTrainingFleron"}>{"2015-2017"}</div>
          <div className={"descriptionTrainingFleron"}>
            {"Graduated as a veterinary assistant"}
          </div>
        </div>
        <div className={"saintJacques"}>
          <div className={"titleTrainingSJ"}>{"Saint-Jacques High School"}</div>
          <div className={"dateTrainingSJ"}>{"2012"}</div>
          <div className={"descriptionTrainingSJ"}>
            {"General Secondary School Diploma (CESS)"}
          </div>
        </div>
      </div>

      {/*   EXPERIENCES   */}
      <div className={"blocXp"}>
        <h2>{"Experience"}</h2>

        <div className={"stageWad"}>
          <div className={"xp"}>{"internship at Webadev"}</div>
          <div className={"separator"}></div>
          <div className={"date"}>{"December 2019 - February 2020"}</div>
        </div>

        <div className={"hackathonW"}>
          <div className={"date"}>{"2019"}</div>
          <div className={"separator"}></div>
          <div className={"xp"}>{"WeCargo hackathon"}</div>
        </div>

        <div className={"becode"}>
          <div className={"xp"}>
            {
              "Creation of websites, use of Git / Github, autodidact learning of different languages"
            }
          </div>
          <div className={"separator"}></div>
          <div className={"date"}>{"2019"}</div>
        </div>

        <div className={"job"}>
          <div className={"date"}>{"2018"}</div>
          <div className={"separator"}></div>
          <div className={"xp"}>{"Cdd cashier/restocker at Primark Liège"}</div>
        </div>
        <div className={"stagevete2"}>
          <div className={"xp"}>
            {"End of study internship at Triovet Veterinary Center"}
          </div>
          <div className={"separator"}></div>
          <div className={"date"}>{"2017"}</div>
        </div>
        <div className={"stageVete1"}>
          <div className={"date"}>{"2016"}</div>
          <div className={"separator"}></div>
          <div className={"xp"}>
            {"Internship in the veterinary practice of Dr Catherine Bande"}
          </div>
        </div>
        <div className={"jobStudent"}>
          <div className={"xp"}>
            {"Home agent at the Carrefour of Fléron (Student Job)"}
          </div>
          <div className={"separator"}></div>
          <div className={"date"}>{"2013"}</div>
        </div>
        <div className={"jobStudentRetho"}>
          <div className={"date"}>{"2012"}</div>
          <div className={"separator"}></div>
          <div className={"xp"}>{"Primary Assistant to George Mignon"}</div>
        </div>
      </div>
      <div className={"download"}>
        <a
          href="https://github.com/MeloScav/cv-portfolio/raw/master/CV-SCAVEZZONI-Meloe.pdf"
          download="CV-SCAVEZZONI-Meloe"
        >
          <button type={"button"}>{"Download the CV in pdf"} </button>
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
      <Footer value={"This site was realised with REACT"} />
    </div>
  );
};

export default CvEnComponent;
