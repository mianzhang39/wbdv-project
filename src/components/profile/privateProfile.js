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
    const [user,setUser]=useState({});
    const [otherUser,setOtherUser]=useState({});
    useEffect(_=> {
        fetch('https://localhost:3000/api/users/profile', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(currentUser => setUser(currentUser))

        if (userId) {
            fetch('http://localhost:3000/api/users.profile/${userId}')
                .then(response=>response.json())
                .then(otherUser=>setOtherUser(otherUser))
        }

    })



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
                                        Zoey<span className="font-weight-light"></span>
                                    </h3>
                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"></i>Boston
                                    </div>
                                    <div className="col">
                                        <div className="row md-3">
                                            <div className='col-3'>
                                                <h6>22 followers</h6>
                                            </div>
                                            <div className='col-3'>
                                                <h6>10 following</h6>
                                            </div>
                                            <div className='col-3'>
                                                <h6>10 review</h6>
                                            </div>
                                            <div className='col-3'>
                                                <h6>3 likes</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p>description</p>
                                        <br/>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <a href="#" className="btn btn-sm btn-info float-right">Follow</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        user.id===otherUser.id &&
                        <PrivateProfileEdit/>
                    }
                    {
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





