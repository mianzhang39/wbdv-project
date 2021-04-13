import React from "react";
import UpperSearchBar from "./upper-search-bar";
import Navigator from "./navigator";
import './logo-slogan.css'


const BasicComponentsWithSearchBar = () =>{
    return(
        <>
            <div className="row">
                <div className="col-6">
                    <h1 className="namecolor">Book Universe.com</h1>
                </div>
                <div className="col-6">
                    <div className="row">
                        <UpperSearchBar/>
                    </div>
                </div>
            </div>
            <Navigator/>
        </>

    )
}

export default BasicComponentsWithSearchBar