import React from 'react'
import { withRouter } from "react-router-dom";

function AboutMe() {
    return (
        <div className="main-content">
            <h2>About me!</h2>

            <p> I am a responsible and determined
                person who is easy to work with. </p>
           

            <h3>Språk</h3>
            <p>Swedish and English, fluently.</p>
            <p>And a little bit Spanish, more understanding than speaking.</p>

            
        

            <h3>Other Qualifications</h3>
            <p>I'm very comfortable with long trips around the world.
            </p>
            <p>Driverlicense:	B </p>
            <p>Trucklicense:	A1-4, B1-5</p>

            <div className="kontaktInfo">
                <h3>Contactinfo</h3>
                <p>Mobile: 0708952141</p>
                <p>Email: Tobiasp89tp@gmail.com</p>
                
            </div>
        </div>
    )
}

export default withRouter(AboutMe)
