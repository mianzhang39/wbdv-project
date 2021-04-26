import React, {useState, useEffect} from 'react'
import bookService from '../services/book/book-service'
import localBookService from '../services/book/local-book-service'
import {Link, useParams, useHistory} from "react-router-dom";
import './components.css';
import BasicComponentsWithSearchBar from "./logo-slogan-navigator/basic-components-with-search-bar";
import SearchCard from "./search-card";

const Search = () => {
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true);
    // const [authors, setAuthors] = useState([])
    // const {role} = useParams()
    // const history = useHistory()
    useEffect(() => {
        setLoading(true);
        setSearchTitle(title)
        if (title) {
            bookService.findBookByTitle(title)
                .then(results => setResults(results.items))

        }
        setLoading(false)
    }, [title])
    if (loading) {
        return <div>loading...</div>
    } else {
        return (
            <div className='bg-pic-1'>
                <BasicComponentsWithSearchBar/>

                <br className="horizontal-line"/>

                <div id="search-results-list" className="container">

                    <h2>Search Results: {results.length}</h2>
                    <div className='row'>
                        {
                            results.map(book=>

                                <SearchCard book={book}/>
                            )
                        }
                        )
                        }
                    </div>

                </div>
            </div>
        )
    }
}


export default Search
