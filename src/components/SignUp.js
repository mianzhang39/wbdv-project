import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";

const SignUp = () => {


    return(

        <div className="bg-pic">
            <div className="row">
                <div className="col-6">
                    <h1 className="namecolor">Book Universe.com</h1>
                </div>
                <div className="col-6"></div>
            </div>

            <div className="row">
                <div className="col-6">
                    <h2 className="slogancolor">Where inspirations are created</h2>
                </div>
                <div className="col-6">
                    <ul className="nav tabsize">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" >About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/SignUp">Sign up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/SignIn">Log in</a>
                        </li>
                    </ul>
                </div>
            </div>

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