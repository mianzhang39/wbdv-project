import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import bookService from "../services/book-service";
import './homepage.css'

const Home = () => {
    // const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    // const [results, setResults] = useState([])

    const history = useHistory()
    // useEffect(() => {
    //     setSearchTitle(title)
    //     if(title) {
    //         bookService.findBookByTitle(title)
    //             .then(results => setResults(results.items))
    //         console.log(results)
    //     }
    // }, [title])

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


            <div className="row">
                <label className="col-3 hello-text">
                    Hello,
                </label>

                <div className="col-7 search-bar input-group input-group-lg">
                    <input
                        type="text"
                        onChange={(event) => {
                            setSearchTitle(event.target.value)}}
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="What are you looking for?"
                        value={searchTitle}/>
                </div>

                <div className="col-2 search-button">
                    <button type="button"
                            className="btn btn-outline-primary btn-lg"
                            onClick={() => {history.push(`/search/${searchTitle}`)}}>
                        Search
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Home