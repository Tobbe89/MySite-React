import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function TechExperience() {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    <section id="techexp">
      <div className="text-container">
        <div data-aos="fade-left" data-aos-duration="1500" >
          <h2 className="contentText">Nexer</h2>
          <p>
            I had my intership and now my fulltime job as developer at Nexer, Örebro Sweden
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1600" >
          <h2 className="contentText">Blue Social</h2>
          <p>
            For a short time I was programming NFC-Cards for Blue Social in
            Riverside, CA
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1700" >
          <h2 className="contentText">Ericsson</h2>
          <p>
            Final assembler/Testoperator. For some time I was Assembling, Testing
            and Troubleshooting radio units for Ericsson
          </p>
        </div>
      </div>
      <div className="picture-container">
        {/* <div data-aos="fade-left" className="nexer-logo">
          <svg width="112" height="89" viewBox="0 0 112 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.5 44.5L1 1H19L50.5 44.5L19 88H1L32.5 44.5Z" fill="black" stroke="white"/>
          <path d="M61.5 44.5L31 1H49L70.5 31.5L93 1H111L79.5 44.5L111 88H93L71 57L49 88H31L61.5 44.5Z" fill="black" stroke="white"/>
          </svg>
        </div> */}
      </div>
    </section>
  );
}

export default TechExperience;
