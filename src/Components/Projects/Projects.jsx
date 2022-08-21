import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/shaheen-ahmad2601/netmeds-unit-2-updated/raw/master/home-page-netmeds.png"
                  alt="Mail Chimp"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Netmeds Clone</h2>
              <p>
                We were a team of 6 members from the Masai Web-15 batch who
                worked on cloning the Netmeds website as part of our Unit-2
                construct week. As a team, we were given a project to clone the
                Netmeds website.
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://zippy-kitsune-2c37d4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See Project
                  </span>
                </a>
                <a
                  href="https://github.com/goriens/Netmedsclone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://miro.medium.com/max/1400/1*lNs-zyhIQXh5l2zeOXM1BQ.png"
                  alt="Myntra"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Pepperfry Clone</h2>
              <p>
                We have prepared this blog to share our complete experience of
                one week period in which we worked on a project assigned to us
                by Masai School. Thanks to Masai School for this opportunity.
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://pepperfry-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See Project
                  </span>
                </a>
                <a
                  href="https://github.com/NishutSuman/Pepperfry_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/76823175/166009708-5e03cc4f-0077-4778-9a8f-10618918eeb3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>PortFolio Website </h2>
              <p>
                I try to create a portfolio website using html, css and
                javascript.
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://my-js-portfolio.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See Project
                  </span>
                </a>
                <a
                  href="https://github.com/goriens/my-js-portfolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature.jpg"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Authentication System</h2>
              <p>
                Email and google Athentication and Authorization system with mvc
                patthern and crud functionality using mongodb, nodejs and
                express
              </p>
              <div>
                <SiExpress />
                <SiMongodb />
                <SiNodedotjs />
              </div>
              <div>
                <a
                  href="https://github.com/goriens/google-auth"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Get API
                  </span>
                </a>
                <a
                  href="https://github.com/goriens/google-auth"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
