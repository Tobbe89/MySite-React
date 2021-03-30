import React from 'react'
import { withRouter } from "react-router-dom";


function OverallExperience() {
    return (
        <div>
            <h2>Ericsson</h2>
            <p>Slutmontör/Testoperatör</p>

            <h2>TriTech</h2>
            <p>Hårdvaruprogrammering och cad</p>

            <h2>Consulting</h2>
            <p>Support</p>

            <h2>Martin G Andersson</h2>
            <p>Glaskonstrukör</p>

            <h2>Sundsgården</h2>
            <p>Servitör</p>

            <h2>Enskild Verksamhet</h2>
            <p>Anläggare</p>

            <h2>Peab anläggning</h2>
            <p>Anläggare</p>

            <h2>Ahlsell</h2>
            <p>Lagerarbetare</p>

            <h2>Epiroc</h2>
            <p>Materialhanterare</p>
        </div>
    )
}

export default withRouter(OverallExperience)
