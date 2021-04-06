import React, {useState, useEffect} from 'react'
import bookService from '../services/book-service'
import {Link, useParams, useHistory} from "react-router-dom";
import './components.css';

const Search = () => {
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState([])
    const [authors, setAuthors] = useState([])

    const history = useHistory()
    useEffect(() => {
        setSearchTitle(title)
        if(title) {
            bookService.findBookByTitle(title)
                .then(results => setResults(results.items))
            console.log(results)
        }
    }, [title])
    return(
        <div className='bg-pic-1'>
            <div className="row">
                <div className="col-6">
                    <h1 className="namecolor">Book Universe.com</h1>
                </div>
                <div className="col-6">
                    <div className="row">

                        <div className="col-8 textsearchbar input-group input-group-lg">
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

                        <div className="col-4 textsearchbutton">
                            <button type="button"
                                    className="btn btn-outline-primary btn-lg"
                                    onClick={() => {history.push(`/search/${searchTitle}`)}}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
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
            <br className="horizontal-line"/>

            <div id = "search-results-list" className="container">

                <h2>Search Results: {results.length}</h2>
                <div className='row'>
                    {
                        results.map(
                            (book) => {
                                const authors =
                                    book.volumeInfo.authors === undefined ?
                                        "Unknown" : `${book.volumeInfo.authors}`

                                const pic =
                                    book.volumeInfo.imageLinks === undefined ?
                                        "" : `${book.volumeInfo.imageLinks.thumbnail}`

                                return(

                                    <section className='card' style={{width: '35rem', margin: '5px'}}>
                                        <div className='row'>
                                            <div className='col-5'>
                                                <a className='image-link ' href={`/details/{book.id}`}>
                                                    <img className="img-responsive"
                                                         style={{width:240,height:360}}
                                                         src={pic}/>
                                                </a>
                                            </div>
                                            <div className='col-7'>
                                                <div className='card-body'>

                                                    <h3 className='card-title'><a
                                                        title={book.volumeInfo.title}
                                                        href={`/details/${book.id}`}>
                                                        {book.volumeInfo.title}
                                                    </a></h3>

                                                    <h6>
                                                        <dt><strong>Author:</strong> {authors}</dt>
                                                        <dt><strong>Published Date:</strong>{book.volumeInfo.publishedDate}
                                                        </dt>
                                                    </h6>
                                                </div>

                                                <div className="col-sm text-align-center">
                                                    <a
                                                        className="btn btn-primary btn-info"
                                                        href={`/details/${book.id}`}>Learn More</a>
                                                </div>
                                            </div>


                                        </div>




                                    </section>

                                    // <div class = "row search-result-item">
                                    //     <div className="col-md-1 col-xs-2 padd-img">
                                    //         <a title= {book.volumeInfo.title}
                                    //            href={`/details/{book.id}`}>
                                    //             <img className="img-responsive"
                                    //                  src={pic}/>
                                    //         </a>
                                    //     </div>
                                    //     <div className="col-md-9 col-xs-9 div-o">
                                    //         <h3><a
                                    //             title={book.volumeInfo.title}
                                    //             href={`/details/${book.id}`}>
                                    //             {book.volumeInfo.title}
                                    //         </a></h3>
                                    //         <dl>
                                    //             <dt><strong>Author:</strong> {authors}</dt>
                                    //             <dt><strong>Published Date:</strong>{book.volumeInfo.publishedDate}</dt>
                                    //         </dl>
                                    //
                                    //
                                    //
                                    //     </div>
                                    // </div>

                                )
                            },
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Search
