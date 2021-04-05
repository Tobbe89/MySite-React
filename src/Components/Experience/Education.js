import React from 'react'
import { withRouter } from "react-router-dom";

function Education() {
    return (
        <div className="main-content">
            
            <h2>Fullstackutvecklare .NET</h2>
            <p>Programutvecklare, Webbutvecklare, Systemutvecklare och Applikationsutvecklare</p>
            
            <h2>Mikrodatorteknik, Göteborgs Tekniska Institut.</h2>
            
            <h3>Programmering:</h3> <p>Grunder med språken C, C++ och Assembly.</p>
            <h3>Ellära:</h3>
            <p>
            Läran av olika elektroniska komponenter till kretskort, deras funktioner.
            </p>
            <h3>Kretskortsdesign:</h3>
            <p>Med hjälp av CAD program tillverka fullständiga kretskort med komponenter. CAD programmens olika funktioner och verktyg.</p>
            <h2>It-Media , John Bauergymnasiet.</h2>
            <p>
            De mesta inom Media med hjälp av datorn som verktyg. 
           </p>
            <p> Program: Word, Excel, PowerPoint, Virtuella miljöer, Photoshop, Illustrator.</p>
           

            
        </div>
    )
}

export default withRouter(Education)
