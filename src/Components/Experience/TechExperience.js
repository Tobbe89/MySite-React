import React from 'react'
import { withRouter } from "react-router-dom";

function TechExperience() {
    return (
        <div className="main-content">
            <p> 
            <h1>Arbetserfarenhet</h1>
                <h2 className="contentText">Blue Social</h2>
            Under en liten tid jobbade jag med Blue Social i Riverside, Kalifornien där jag programmerade deras NFC-kort.
                <h2 className="contentText">CAB Group</h2>
            Under praktikperioden satt jag i supporten och såg till att CABs kunder fick den hjälp de behövde.
                <h2 className="contentText">Ericsson</h2>
            Slutmontör/Testoperatör.
            Under tiden hos Ericsson jobbade jag med montering av komponenter och tillbehör till radiostationer med hjälp av el-scheman av olika varianter. Jag jobbade även som testoperatör; jag testade, förfelsökte felaktiga radiostationer och även reparerade
            </p>
        </div>
    )
}

export default withRouter(TechExperience)
