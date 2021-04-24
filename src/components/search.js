import React, {useState, useEffect} from 'react'
import bookService from '../services/book/book-service'
import {Link, useParams, useHistory} from "react-router-dom";
import './components.css';
import BasicComponentsWithSearchBar from "./logo-slogan-navigator/basic-components-with-search-bar";

const Search = () => {
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState([])
    // const [authors, setAuthors] = useState([])
    // const {role} = useParams()
    // const history = useHistory()
    useEffect(() => {
        setSearchTitle(title)
        if(title) {
            bookService.findBookByTitle(title)
                .then(results => setResults(results.items))
        }
    }, [title])
    return(
        <div className='bg-pic-1'>
            <BasicComponentsWithSearchBar/>

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

                                                <div className="col-sm card-body">
                                                    <label>
                                                        Likes: 26
                                                    </label>
                                                    <br/>
                                                    <label>
                                                        Comments: 52
                                                    </label>
                                                </div>

                                                <div className="col-sm text-align-center card-body">
                                                    <a
                                                        className="btn btn-primary btn-info"
                                                        href={`/details/${book.id}`}>Learn More</a>
                                                    {/*href={`/${role}/details/${book.id}`}>Learn More</a>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                )
                            }
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Search
