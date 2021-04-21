import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from "react-router-dom";
import SignInSearchBar from "../logo-slogan-navigator/signin_search_bar";
import BasicComponentsWithSearchBar from "../logo-slogan-navigator/basic-components-with-search-bar";
import './profile.css'
import '../components.css'
import userService from '../../services/user/users-service'
import PrivateProfileEdit from "./privateProfile_edit";
import PublicProfile from './publicProfile'


const PrivateProfile = () => {
    const [signIn,setSignIn]=useState({});
    const {userId}= useParams();
    console.log(userId)
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
    const [otherUser,setOtherUser]=useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
        aboutMe: "",
        following: [],
        followedBy: [],
        liked: [],
        comments: [],
        sold: []
    });
    useEffect(() => {
        const interval=setInterval(()=>{
            userService.profile()
            .then(current => {
                userService.findUserByName(current.username)
                    .then(currentUser => {
                        setUser(currentUser)
                        if (userId) {
                            // console.log("have userId")
                            userService.findUserByName(userId)
                                .then(response => setOtherUser(response))
                        }
                    })

            })
        },5000)
        return()=>clearInterval(interval)


    },[])




    return(
        <div className="bg-pic">
            {signIn &&
                <SignInSearchBar/>}
            {!signIn &&
            <BasicComponentsWithSearchBar/>}


            <hr className="horizontal-line"/>
            <br/>
            <br/>

            <h1 className=" text-gray welcome-sentence">Hello user, this is your profile page.</h1>
            <div className="container-fluid padding">
                <div className=" mb-3 row ">
                    <div className="col-4">
                        <div className="card card-profile shadow">

                            <div className="card-header">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <h2>Profile</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">

                                <div className="text-center">
                                    <h3>
                                        {!userId &&
                                            user.username
                                        }
                                        {userId &&
                                            otherUser.username}<span className="font-weight-light"></span>
                                    </h3>

                                    <div className="col">
                                        <div className="row md-3">
                                            <div className='col-3'>
                                                <h6>
                                                    {!userId &&
                                                    user.followedBy.length
                                                    }
                                                    {userId &&
                                                        otherUser.followedBy.length} followers</h6>
                                            </div>
                                            <div className='col-3'>
                                                <h6>
                                                    {!userId &&
                                                    user.following.length
                                                    }
                                                    {userId &&
                                                        otherUser.following.length} following</h6>
                                            </div>
                                            <div className='col-3'>
                                                <h6>
                                                    {!userId &&
                                                    user.comments.length
                                                    }
                                                    {userId &&
                                                        otherUser.comments.length} review</h6>
                                            </div>
                                            <div className='col-3'>
                                                <h6>
                                                    {!userId &&
                                                    user.liked.length
                                                    }
                                                    {userId &&
                                                        otherUser.liked.length} likes</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p>description</p>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        !userId &&
                        <PrivateProfileEdit/>
                    }
                    {
                        userId &&
                        <PublicProfile/>
                    }




                </div>
            </div>

            {/*<div className="row">*/}
            {/*    {*/}
            {/*        role==='guest' &&*/}
            {/*            <guest_profile role={role}/>*/}
            {/*    }*/}
            {/*    {*/}
            {/*        role==='buyer' &&*/}
            {/*        <nonGuest role={role}/>*/}
            {/*    }*/}
            {/*    {*/}
            {/*        role==='seller' &&*/}
            {/*        <nonGuest role={role}/>*/}
            {/*    }*/}

            {/*</div>*/}
        </div>
    )

}

export default PrivateProfile





