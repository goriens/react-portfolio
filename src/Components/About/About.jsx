import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I'm <span className="about__name">Suhaib Gour</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          I am a Full-stack Engineer skilled in building scalable, real-time
          applications using NodeJS, MongoDB, TypeScript, and Next.js. With
          expertise in architecture design and frameworks like Python, and am
          passionate about delivering high-quality software solutions.
        </p>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1tIzb5iHaQ9IkWpP0jwJC4yYhb-4OwdCq/view?usp=sharing"
        >
          <span type="button" className="btn btn--outline onbt resume_btn">
            Resume Download
          </span>
        </a>

        <div className="about__contact center">
          <a
            href="https://github.com/goriens"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:sohaibgoriens@gnail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918077851368"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/suhaib-gour/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://goo.gl/maps/SBRJNi9Tk7f1zJb1A"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>

      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
