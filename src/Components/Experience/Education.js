import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="education">
      <div data-aos="fade-left" className="text-container">
        <h2>Fullstack Developer .NET</h2>
        <p>Software- , Web- , System- and Application-Developer</p>
        {/* <p>Visual Studio: ASP.NET, MVC, WPF, Unit Test</p>
        <p>Visual Studio Code: JS, HTML, CSS, JSx, React</p> */}
        {/* <p>SQL, Postman</p> */}
        <h2>Microcomputer technology, Göteborgs Tekniska Institut.</h2>
        <p>C, C++ och Assembly Programming</p>

        <h2>It-Media , John Bauer - High School.</h2>
        <p>
          Managing media content such as: News, Filming, Photoshoping, Virtual
          environments etc. Programs: Word, Excel, PowerPoint, Photoshop,
          Illustrator.
        </p>
      </div>
      <div className="picture-container"></div>
    </section>
  );
}

export default Education;
