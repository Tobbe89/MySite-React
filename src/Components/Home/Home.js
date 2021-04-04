import React from 'react'
import { withRouter } from "react-router-dom";
import "./Picture.css"



function Home() {
    return (
        <div>
            <img className="img1" src="/images/ItsMe.JPG" alt="" />
        </div>
    )
}

export default withRouter(Home) 
