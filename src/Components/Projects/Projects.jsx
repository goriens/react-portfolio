import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";

import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiSupabase,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiClockify,
  SiSwagger,
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
                  src="https://github.com/user-attachments/assets/47eb5b29-3e5e-41aa-bfd0-6c532af0b436"
                  alt="arowwai"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Arowwai</h2>
              <p>
                Engineered a real-time booking system to streamline user
                reservations, boosting user satisfaction by enabling smoother
                data handling
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiNextdotjs />
                <SiTailwindcss />
                <SiSupabase />
              </div>
              <div>
                <a
                  href="https://arowwai.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    View Project
                  </span>
                </a>
                <a
                  href="https://github.com/goriens/Arowwai-cabin-booking"
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
                  src="https://github.com/user-attachments/assets/ffbc732c-684e-4e31-994f-b472d60583b6"
                  alt="jobster"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Jobster Platform</h2>
              <p>
                Jobster is an scalable intuitive platform designed for job
                seekers, making it easy to find and post job opportunities for
                professionals and freshers.
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
                  href="https://udemy-7fn0.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See Project
                  </span>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
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
              <h2>B2C E-commerce API</h2>
              <p>
                Built a public B2C e-commerce API with secure authentication,
                authorization, and multiple user roles.
              </p>
              <div>
                <SiJavascript />
                <SiSwagger />
                <SiExpress />
                <SiNodedotjs />
                <SiMongodb />
                <SiClockify />
              </div>
              <div>
                <a
                  href="https://store-api-n0tp.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Get API & Test API
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
