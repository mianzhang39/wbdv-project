import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import bookService from '../services/book-service'
import "./detail.css"


const Details = () => {
    const [book, setBook] = useState({
        id: "",
        volumeInfo: {
            description: "",
            authors: [],
            industryIdentifiers: [
            ],
            title: "",
            subtitle: "",
            publisher: "",
            publishedDate: "",
            pageCount: 0,
            imageLinks: {
                thumbnail: "",
                small: "",
            },
        },
        saleInfo: {
            retailPrice: {
                amount: "",
            },
        },
    })
    const {ID} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const history = useHistory()
    useEffect(() => {
        bookService.findBookById(ID)
            .then(result => setBook(result))
    },[ID])
    // console.log(book)
    const ISBN13 = book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers.map(
        keys => {
            if (keys.type === "ISBN_13") return keys.identifier
        }
    ).filter(i => i!== undefined)
    console.log(ISBN13)
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
            <hr/>

            <div className="detail-content">
                <div className="detail-book-title card-title">
                    {book.volumeInfo.title}
                </div>
                <section className='card' style={{width: '90rem', margin: '50px'}}>
                <div className="row">
                    <div className="col-sm-4 hidden-xs" role="complementary">
                        <div >
                            <img className="detail-img" title={book.volumeInfo.title} src = {book.volumeInfo.imageLinks.thumbnail}/>
                        </div>
                    </div>
                    <div className="book-info col-xs-8 col-sm-8 hidden-xs">
                        <h4><strong>Authors:</strong>{book.volumeInfo.authors}</h4>
                        <h4><strong>ISBN-10:</strong>{book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers.map(
                            keys => {
                                if (keys.type === "ISBN_10") return keys.identifier
                            }
                        )}</h4>
                        <h4><strong>ISBN-13:</strong>{ISBN13}</h4>
                        <h4><strong>Published Date:</strong>{book.volumeInfo.publishedDate}</h4>
                        <h4><strong>Publisher:</strong>{book.volumeInfo.publisher}</h4>
                        <h4><strong>Total Pages:</strong>{book.volumeInfo.pageCount}</h4>
                    </div>
                </div>

                <div className="detail-blocks">
                    <div className="RyCxoe" aria-level="3" role="heading">Buy A New One</div>
                    <div>
                        <div className="row">
                            <div className="col-6">
                                    <h4 className="col-title">Google Play Books</h4>
                            </div>
                            <div className="col-4 float-lg-right">
                                {(book.saleInfo.retailPrice === undefined)? "Currently Not Available" : `${book.saleInfo.retailPrice.amount}$`}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                                <h4 className="col-title">Buy it on Amazon</h4>
                        </div>
                        <div className="col-4 float-lg-right">
                            <a className="btn btn-primary"
                               href={`https://www.amazon.com/s?k=${ISBN13}&i=stripbooks&linkCode=qs`}
                               role="button">Go to Amazon</a>
                        </div>
                    </div>

                    <div className="RyCxoe"
                         aria-level="3"
                         role="heading">
                        Buy A Used One
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-6">
                                    <h4 className="col-title">Sellers:</h4>
                            </div>
                            <div className="col-4 float-lg-right">
                                <Link><label>each seller's link</label></Link>
                            </div>
                        </div>
                    </div>



                </div>
                </section>
            </div>

        </div>
    )
}

export default Details