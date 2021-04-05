import React from 'react'
import { withRouter } from "react-router-dom";

function TechExperience() {
    return (
        <div className="main-content">
            <p> 
            <h1>Arbetserfarenhet</h1>
                <h2 className="contentText">Blue Social</h2>
            For a short time I was programming NFC-Cards for Blue Social in Riverside, CA.
                
                <h2 className="contentText">Ericsson</h2>
            Final assembler/Testoperator.
            For some time I was Assembling, Testing and Troubleshooting radio units for Ericsson.

            </p>
        </div>
    )
}

export default withRouter(TechExperience)
