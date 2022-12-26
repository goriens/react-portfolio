import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
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
                  src="https://user-images.githubusercontent.com/76823175/196040294-e3962100-beed-4fce-9c7e-3b7e202e2659.png"
                  alt="Mail Chimp"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Gour Shop</h2>
              <p>
                Gour Shop is an Mern stack ecommerce web application for selling
                product online. This project was created in 1 week.
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <SiCss3 />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a href="#" target="_blank" rel="noreferrer">
                  <span type="button" className="btn btn--outline onbt">
                    View Project
                  </span>
                </a>
                <a
                  href="https://github.com/goriens/mern-e1"
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
              <h2>Authentication API</h2>
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
