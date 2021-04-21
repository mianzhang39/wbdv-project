import React from "react";
import './logo-slogan.css'
import {Link, useParams} from "react-router-dom";

const NavigatorSignIn = () => {
    const {role} = useParams()
    const transfer = (role) => {
        if (role == undefined) {
            role = "guest"
        }
        return role
    }
    return(
        <div className="row">
            <div className="col-6">
                <h2 className="slogancolor">Where inspirations are created</h2>
            </div>
            <div className="col-6">
                <ul className="nav tabsize">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href={"/homepage/" + transfer(role)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <Link to={"/aboutus"}>
                        <a className="nav-link active" aria-current="page" href="#" >Our Mission</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SignUp">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SignIn">logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavigatorSignIn
