import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import bookService from '../../services/book-service'
import "./details.css"
import '../components.css'
import BasicComponentsWithSearchBar from "../logo-slogan-navigator/basic-components-with-search-bar";
import BuyNewBooks from "./new-books-link";
import UserComments from "./user-comments";
import BuyUsedBooks from "./used-books-link";


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
    const {role, ID} = useParams()
    useEffect(() => {
        bookService.findBookById(ID)
            .then(result => setBook(result))
    },[ID])
    const ISBN13 = book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers.map(
        keys => {
            if (keys.type === "ISBN_13") return keys.identifier
        }
    ).filter(i => i!== undefined)
    return(
        <div className='bg-pic-1'>
            <BasicComponentsWithSearchBar/>
            <br className="horizontal-line"/>
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
                        {role == "buyer" && <BuyUsedBooks/>}

                        {role == "seller" && <label className="RyCxoe"
                                                    aria-level="3"
                                                    role="heading">
                            I want to sell it!
                            <button  className='float-right btn btn-primary '>
                                Sell
                            </button>
                        </label>}
                        <br/>
                        <BuyNewBooks/>
                        <br/>
                        <UserComments/>

                    </div>
                </section>
            </div>

        </div>
    )
}

export default Details