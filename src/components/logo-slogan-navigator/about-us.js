import React from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import BasicComponentsWithSearchBar from "../logo-slogan-navigator/basic-components-with-search-bar";
import "./logo-slogan.css"

const AboutUs = () => {
    return(
        <div className="bg-pic">
            <BasicComponentsWithSearchBar/>
            <hr className="horizontal-line"/>
            <div className="about-us">
                <p>
                    From Math textbooks to cookbooks, from novels to social scientific literature, books
                    play an important role in many people’s lives. However, sometimes when people
                    successfully obtain the knowledge that they desire, books are likely to become less useful
                    for them, and thus it would be better if those books can serve others in need. At the same
                    time, some people who don't have much money at certain times might also want to buy
                    books to help themselves in life, but they cannot afford to buy brand new books.
                    So... Book Universe was born!
                </p>
            </div>
        </div>
    )
}
export default AboutUs