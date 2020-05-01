import React from "react";

// Components
import Footer from "./../components/footerComponent";
import Button from "./../components/buttonComponent";

// Images
import Me from "./../assets/photoCV.jpg";

const CvEnComponent = (props) => {
  return (
    <div className={"containerCv"}>
      <div className={"buttonLang"}>
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
            <p>{"Html/Html5"}</p>
            <p>{"Css/Css3"}</p>
            <p>{"Sass"}</p>
            <p>{"Javascrip"}</p>
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
            <p>{"React"}</p>
            <p>{"Angular"}</p>
            <p>{"Canvas"}</p>
            <p>{"Git/Github"}</p>
            <p>{"Bootstrap"}</p>
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
            <p>{"Wordpress"}</p>
            <p>{"Parcel"}</p>
            <p>{"Webpack"}</p>
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
        <div className={"uniV"}>
          <div className={"titleTrainingUniV"}>{"Liège's university"}</div>
          <div className={"dateTrainingUniV"}>{"2014-2015"}</div>
          <div className={"descriptionTrainingUniV"}>
            {"Veterinary Medicine"}
          </div>
        </div>
        <div className={"uniPsy"}>
          <div className={"titleTrainingUniPsy"}>{"Liège's university"}</div>
          <div className={"dateTrainingUniPsy"}>{"2013-2014"}</div>
          <div className={"descriptionTrainingUniPsy"}>{"Psychology"}</div>
        </div>
        <div className={"uniSc"}>
          <div className={"titleTrainingUniSc"}>{"Liège's university"}</div>
          <div className={"dateTrainingUniSc"}>{"2012-2013"}</div>
          <div className={"descriptionTrainingUniSc"}>
            {"Humanities and Social Sciences"}
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
          <div className={"xpStageWad"}>{"internship at Webadev"}</div>
          <div className={"separator"}></div>
          <div className={"dateStageWad"}>
            {"December 2019 - February 2020"}
          </div>
        </div>

        <div className={"hackathonW"}>
          <div className={"dateHackatonW"}>{"2019"}</div>
          <div className={"separator"}></div>
          <div className={"xpHackathonW"}>{"WeCargo hackathon"}</div>
        </div>

        <div className={"becode"}>
          <div className={"xpBecode"}>
            {
              "Creation of websites, use of Git / Github, autodidact learning of different languages"
            }
          </div>
          <div className={"separator"}></div>
          <div className={"dateBecode"}>{"2019"}</div>
        </div>

        <div className={"job"}>
          <div className={"dateJob"}>{"2018"}</div>
          <div className={"separator"}></div>
          <div className={"xpJob"}>
            {"Cdd cashier/restocker at Primark Liège"}
          </div>
        </div>
        <div className={"stagevete2"}>
          <div className={"xpVete2"}>
            {"End of study internship at Triovet Veterinary Center"}
          </div>
          <div className={"separator"}></div>
          <div className={"dateVete2"}>{"2017"}</div>
        </div>
        <div className={"stageVete1"}>
          <div className={"dateVete1"}>{"2016"}</div>
          <div className={"separator"}></div>
          <div className={"xpVete1"}>
            {"Internship in the veterinary practice of Dr Catherine Bande"}
          </div>
        </div>
        <div className={"jobStudent"}>
          <div className={"xpJobStudent"}>
            {"Home agent at the Carrefour of Fléron (Student Job)"}
          </div>
          <div className={"separator"}></div>
          <div className={"dateJobStudent"}>{"2013"}</div>
        </div>
        <div className={"jobStudentRetho"}>
          <div className={"dateJobStudentRetho"}>{"2012"}</div>
          <div className={"separator"}></div>
          <div className={"xpJobStudentRetho"}>
            {"Primary Assistant to George Mignon"}
          </div>
        </div>
      </div>
      <div className={"download"}>
        <a
          href="https://github.com/MeloScav/my-web-site/raw/master/CV-SCAVEZZONI-Méloé.pdf"
          download="CV-SCAVEZZONI-Meloe"
        >
          <button type={"button"}>{"Download the CV in pdf"} </button>
        </a>
      </div>
      <div className={"buttons"}>
        <Button
          class="buttonReturn"
          onClick={() => {
            setButtonReturn(true);
          }}
          value={"Return"}
        />
        <Button
          class="buttonPortfolio"
          onClick={() => {
            setButtonPortfolio(true);
          }}
          value={"Portfolio"}
        />
      </div>
      <Footer value={"This site is realized in REACT"} />
    </div>
  );
};

export default CvEnComponent;
