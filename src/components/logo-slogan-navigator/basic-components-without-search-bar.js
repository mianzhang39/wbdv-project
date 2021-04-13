import React from "react";
import './logo-slogan.css';
import Navigator from "./navigator";
import './logo-slogan.css';

const BasicComponentsWithoutSearchBar = () => {
    return(
        <div>
        <div className="row">
            <div className="col-6">
                <h1 className="namecolor">Book Universe.com</h1>
            </div>
            <div className="col-6"></div>
        </div>

        <Navigator/>
        </div>
        )
}

export default BasicComponentsWithoutSearchBar;

