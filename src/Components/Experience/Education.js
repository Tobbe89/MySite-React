import React from 'react'
import { withRouter } from "react-router-dom";

function Education() {
    return (
        <div className="main-content">
            
            <h2>Fullstack Developer .NET</h2>
            <p>Software- , Web- , System-  and Applikation-Developer</p>

            <h2>Microcomputer technology, Göteborgs Tekniska Institut.</h2>     
            <h3>Programmering:</h3> <p>C, C++ och Assembly Programming</p>
            <h3>Electrical circuits:</h3>
            <p>
                Mathematical solutions of electrical circuits
            </p>
            <h3>Circuit board design:</h3>
            <p>Designing PCB with help of CAD Software</p>
            <h2>It-Media , John Bauer - High School.</h2>
            <p>
                Education that contained Media with different forms like: News, Filming, Photoshoping,
                Virtual environments and more.
                 
                Programs: Word, Excel, PowerPoint, Photoshop, Illustrator.
            </p>

            
        </div>
    )
}

export default withRouter(Education)
