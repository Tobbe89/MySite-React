import React from "react";
import * as IcoMoon from "react-icons/im";

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <a className="nav-icon1" href="#header">
          <IcoMoon.ImHome3 />
          <span className="hover-icon1">Home</span>
        </a>
        <a className="nav-icon2" href="#education">
          <IcoMoon.ImBooks />
          <span className="hover-icon2">Education</span>
        </a>
        <a className="nav-icon3" href="#techexp">
          <IcoMoon.ImOffice />
          <span className="hover-icon3">Tech Experience</span>
        </a>
        <a className="nav-icon4" href="#overallexp">
          <IcoMoon.ImBriefcase />
          <span className="hover-icon4">Other Experience</span>
        </a>
        <a className="nav-icon5" href="#contact">
          <IcoMoon.ImMail3 />
          <span className="hover-icon5">Contect me!</span>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
