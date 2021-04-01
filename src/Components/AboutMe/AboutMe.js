import React from 'react'
import { withRouter } from "react-router-dom";

function AboutMe() {
    return (
        <div className="main-content">
            <h2>Lite om mig!</h2>

            <p> Jag är en ansvarsfull och målmedveten person som är 
                lätt att samarbeta med </p>
           

            <h3>Språk</h3>
            <p>Svenska och Engelska, flytande i tal och skrift.
                
            </p>

            
            <h3>Övrigt</h3>
            <p>Körkort:	B
            Truckkort:	A1-4, B1-5</p>

            <h3>Övriga meriter </h3>

            <p>Långa utlandsresor, känner mig väldigt
            bekväm att resa runt om i världen.</p>
        </div>
    )
}

export default withRouter(AboutMe)
