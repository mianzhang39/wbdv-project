import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import BasicComponentsWithoutSearchBar from "./logo-slogan-navigator/basic-components-without-search-bar";

const SignUp = () => {


    return(

        <div className="bg-pic">
            <BasicComponentsWithoutSearchBar/>
            <hr className="horizontal-line"/>
            <br/>
            <br/>
            <div className="container">
                <h1>Join the Book Universe Today!</h1>
                <br/>
                <br/>
                <div className="mb-3 row">
                    <label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="usernameFld" />
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                               id="passwordFld" />
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label">verify password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                               id="verifyPasswordFld" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="emailFld" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input  className="form-control"
                               id="emailFld" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor='registerBtn' className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a href="#">
                            <button className="btn btn-primary btn-block"
                                    id="registerBtn">Sign Up
                            </button>
                        </a>

                        <div className="row">
                            <div className="col-12">
                                <a href="#" className="ui-corner-left">Login</a>
                                <a href="#" className="float-right">Cancel</a>
                            </div>


                        </div>

                    </div>
                </div>


            </div>



        </div>

    )
}

export default SignUp