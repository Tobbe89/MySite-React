import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function TechExperience() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="techexp">
      <div data-aos="fade-left" className="text-container">
        <h2 className="contentText">Nexer</h2>
        <p>
          While studying I had my practice-period at Nexer as a
          Fullstack-developer
        </p>
        <h2 className="contentText">Blue Social</h2>
        <p>
          For a short time I was programming NFC-Cards for Blue Social in
          Riverside, CA.
        </p>
        <h2 className="contentText">Ericsson</h2>
        <p>
          Final assembler/Testoperator. For some time I was Assembling, Testing
          and Troubleshooting radio units for Ericsson.
        </p>
      </div>
      <div className="picture-container"></div>
    </section>
  );
}

export default TechExperience;
