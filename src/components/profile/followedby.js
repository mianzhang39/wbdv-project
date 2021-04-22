import React, {useEffect, useState} from "react";
import SignInSearchBar from "../logo-slogan-navigator/signin_search_bar";
import BasicComponentsWithSearchBar from "../logo-slogan-navigator/basic-components-with-search-bar";
import Card from "./card";
import userService from "../../services/user/users-service";


const FollowedBy=()=>{
    const [signIn,setSignIn]=useState({})
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
    return(
        <>
            <div className="bg-pic">
                {signIn &&
                <SignInSearchBar/>}
                {!signIn &&
                <BasicComponentsWithSearchBar/>}


                <hr className="horizontal-line"/>
                <br/>
                <br/>
                <div className='row'>
                    {
                        user.followedBy && user.followedBy.map(username=>
                            <Card username={username} />)
                    }
                </div>
            </div>
        </>
    )
}

export default FollowedBy