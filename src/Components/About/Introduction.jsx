import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                width="100%"
                src="https://avatars.githubusercontent.com/u/76823175?v=4"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Suhaib Gour </span> I belong to{" "}
                <span className="different"> Roorkee, Uttarakhand</span>. I have
                done a{" "}
                <span className="different">
                  Full Stack Web Development course
                </span>{" "}
                at Masai School. Presently I am pursuing a{" "}
                <span className="different">Bachelor of Science (B.S) </span> in
                specialization{" "}
                <span className="different"> Data Science Engineering</span> at
                Indian Institute Technology, Madras.
              </h4>
              <h4> My Interest In :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Books{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveling{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Writing Blogs{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Coding & Programming{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Data Science{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
