import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiNetlify,
  SiWordpress,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiNextdotjs,
} from "react-icons/si";
import { DiCss3, DiMongodb, DiPostgresql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <SiCplusplus />
            <h5>C++</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>NextJS</h5>
          </div>
          <div>
            <FaReact />
            <h5>ReactJS</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>

          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <DiPostgresql />
            <h5>PostgreSQL</h5>
          </div>
        </div>
      </div>
    </>
  );
};
