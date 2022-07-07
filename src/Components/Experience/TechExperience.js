import React from "react";
import { withRouter } from "react-router-dom";

function TechExperience() {
  return (
    <section id="techexp">
      <div className="text-container">
        <p>
          <h2 className="contentText">Nexer</h2>
          While studying I had my practice-period at Nexer as a
          Fullstack-developer
          <h2 className="contentText">Blue Social</h2>
          For a short time I was programming NFC-Cards for Blue Social in
          Riverside, CA.
          <h2 className="contentText">Ericsson</h2>
          Final assembler/Testoperator. For some time I was Assembling, Testing
          and Troubleshooting radio units for Ericsson.
        </p>
      </div>
    </section>
  );
}

export default TechExperience;
