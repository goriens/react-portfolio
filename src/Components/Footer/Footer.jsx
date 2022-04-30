import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="https://github.com/goriens" rel="noreferrer" target="_blank">
          <h3 className="footer">
            Made with ❤ By Suhaib Gour
            <p className="para">sohaibgoriens@gmail.com</p>
            <p className="para">+91-8077851368</p>
          </h3>
        </a>
      </div>
    </>
  );
};
