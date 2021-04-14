import React from "react";
import './logo-slogan.css'

const Navigator = () => {
    return(
        <div className="row">
            <div className="col-6">
                <h2 className="slogancolor">Where inspirations are created</h2>
            </div>
            <div className="col-6">
                <ul className="nav tabsize">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/homepage" >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" >About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SignUp">Sign up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SignIn">Sign in</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigator
