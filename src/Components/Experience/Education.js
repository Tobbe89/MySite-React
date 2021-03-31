import React from 'react'
import { withRouter } from "react-router-dom";

function Education() {
    return (
        <div>
            
            <h2>Fullstackutvecklare .NET</h2>
            <p>Programutvecklare, webbutvecklare, systemutvecklare och applikationsutvecklare</p>
            <h2>Mikrodatorteknik, Göteborgs Tekniska Institut.</h2>
            
            <h3>Programmering:</h3> <p>Grunder med språken C, C++ och Assembly.</p>
            <h3>Ellära:</h3>
            <p>
            Läran av olika elektroniska komponenter till kretskort, deras funktioner.
            Med hjälp av CAD program tillverka fullständiga kretskort med komponenter. CAD programmens olika funktioner och verktyg.</p>
            <h3>Kretskortsdesign:</h3>
            
            <p>It-Media , John Bauergymnasiet.
            Utbildningens innehåll är grunder med allt med Media med hjälp av datorn som verktyg.
            Program: Word, Excel, PowerPoint, Virtuella miljöer, Photoshop, Illustrator.
            </p>

            
        </div>
    )
}

export default withRouter(Education)
