import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import BasicComponentsWithoutSearchBar from "./logo-slogan-navigator/basic-components-without-search-bar";
import userService from "../services/user/users-service"


const SignIn = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const history = useHistory()
    const login = () => {
        userService.login(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    alert("login failed, try again")
                } else {
                    history.push("/profile")
                }
            })
        // history.push("/profile")
    }

    return(
        <div className="bg-pic">
            <BasicComponentsWithoutSearchBar/>
        <hr className="horizontal-line"/>
        <br/>
        <br/>
            <div className="container">
                <h1>Welcome to the Book Universe </h1>
                <br/>
                <br/>
                <div className="mb-3 row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="username"
                               onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                               placeholder="please enter your username"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                               id="password" placeholder="please enter your password"
                               onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor='signinBtn' className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                    {/*    <a href="#">*/}

                    {/*        <label>*/}
                    {/*            <input*/}
                    {/*                onClick={() => {setRole('buyer')}}*/}
                    {/*                type="radio"*/}
                    {/*                name='1'*/}
                    {/*            />buyer*/}
                    {/*        </label>*/}
                    {/*        <label className="float-right">*/}
                    {/*            <input*/}
                    {/*                onClick={() => {setRole('seller')}}*/}
                    {/*                type="radio"*/}
                    {/*                name='1'*/}
                    {/*            />seller*/}
                    {/*        </label>*/}
                    {/*    </a>*/}

                        <div className="row">
                            <div className="col-12">

                                    <button className="btn btn-primary btn-lg"
                                            id="signinBtn"
                                            onClick={login}>

                                        Sign in
                                    </button>

                                {/*<button className="btn btn-primary btn-lg float-right"*/}
                                {/*        id="profile_Btn"*/}
                                {/*        onClick={() => {*/}
                                {/*            history.push(`/${role}/profile`)*/}
                                {/*        }}>*/}

                                {/*    Profile*/}
                                {/*</button>*/}

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <a href="#" className="ui-corner-left">Forget Password?</a>
                                <a href="#" className="float-right">Sign up</a>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default SignIn








{/*<Link to={`/buyer`}>*/}
{/*    <button className="btn btn-primary btn-lg"*/}
{/*            id="signinBtn"*/}
{/*            onClick={() => {*/}
{/*                {setRole('buyer')}*/}
{/*                <Homepage role ='buyer'/>*/}
{/*            }}>*/}
{/*        Sign in as a buyer*/}
{/*    </button>*/}
{/*</Link>*/}



{/*<div className="row">*/}
{/*    <div className="col-12">*/}
{/*        <Link to={`/${role}`}>*/}
{/*        <button className="btn btn-primary btn-lg"*/}
{/*                    id="signinBtn">*/}
{/*                Sign in*/}
{/*            </button>*/}
{/*        </Link>*/}
{/*    </div>*/}
{/*</div>*/}






{/*<a href="#">*/}
{/*    <Link to={`/buyer`}>*/}
{/*    <button className="btn btn-primary btn-lg"*/}
{/*            id="signinBtn"*/}
{/*            onClick={() => {*/}
{/*                {setRole('buyer')}*/}
{/*                <Homepage role ='buyer'/>*/}
{/*            }}>*/}
{/*        Sign in as a buyer*/}
{/*    </button>*/}
{/*    </Link>*/}

{/*    <Link to={`/seller`}>*/}
{/*    <button className="btn btn-primary btn-lg float-right"*/}
{/*            id="signinBtn"*/}
{/*            onClick={() => {*/}
{/*                {*/}
{/*                    setRole('seller')*/}
{/*                }*/}
{/*                <Homepage role ='seller' />*/}
{/*            }}>*/}
{/*        Sign in as a seller*/}
{/*    </button>*/}
{/*    </Link>*/}
{/*</a>*/}