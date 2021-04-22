import React, {useEffect, useState} from 'react'
import './seller-homepage.css'
import './buyer-homepage.css'
import './homepage.css'
import './guest-homepage.css'
import '../components.css'
import HomepageSearchBar from "./home-page-search-bar";
import BasicComponentsWithoutSearchBar from "../logo-slogan-navigator/basic-components-without-search-bar";
import {useParams} from "react-router-dom";
import userService from "../../services/user/users-service";


const Homepage = () => {
    const {role} = useParams()
    const transfer = (role) => {
        if (role == undefined) {
            role = "guest"
        }
        return role
    }
    const [user,setUser]=useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
        aboutMe: "...",
        following: [],
        followedBy: [],
        liked: [],
        comments: [],
        sold: []
    });
    useEffect(() => {
            userService.profile()
                .then(current => {
                    userService.findUserByName(current.username)
                        .then(currentUser => {
                            setUser(currentUser)})
                })},[])

    // useEffect(() => {
    //     const interval=setInterval(()=>{
    //         userService.profile()
    //             .then(current => {
    //                 userService.findUserByName(current.username)
    //                     .then(currentUser => {
    //                         setUser(currentUser)})
    //             })},100)
    //     return()=>clearInterval(interval)
    // },[])

    return(
        <div className="bg-pic">
            <BasicComponentsWithoutSearchBar/>
            <hr className="horizontal-line"/>
            <div className="row">
                {transfer(user.role) == "guest" && <label className="guest-sentence">
                    Welcome to BookUniverse! There are 25648 registered members here. Come on and join us!
                </label>}

                {transfer(user.role) == "buyer" && <label className="buyer-sentence">
                    Welcome back! You have commented on (7) books and liked (10) books. Find more for yourself!
                </label>}

                {transfer(user.role) =="seller" && <label className="seller-sentence">
                    Welcome back! You are selling (7) books. Find more for yourself!
                </label>}

            </div>
            <HomepageSearchBar role = {transfer(role)}/>

        </div>

    )
}

export default Homepage
















// import React from 'react'
// import BasicComponentsWithoutSearchBar from "../../logo-slogan-navigator/basic-components-without-search-bar";
// import HomepageSearchBar from "../home-page-search-bar";
// import './guest-homepage.css'
//
// const GuestHomepage = () => {
//     return(
//         <div className="bg-pic">
//             <BasicComponentsWithoutSearchBar/>
//             <hr className="horizontal-line"/>
//             <div className="row">
//                 <label className="guest-sentence">
//                     Welcome to BookUniverse! There are 25648 registered members here. Come on and join us!
//                 </label>
//             </div>
//             <HomepageSearchBar/>
//
//         </div>
//
//     )
// }
//
// export default GuestHomepage