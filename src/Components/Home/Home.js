import React from 'react'
import { withRouter } from "react-router-dom";




function Home() {
    return (
        <div className="my-pic">
            <img className="img1" src="./images/ItsMe.JPG" alt="" />
        </div>
    )
}

export default withRouter(Home) 
