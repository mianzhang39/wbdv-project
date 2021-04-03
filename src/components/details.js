import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import bookService from '../services/book-service'

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
        <div className="container">
            <h1> {book.volumeInfo.title}</h1>
            <div className="row book-detail">
                <div className="col-sm-2 hidden-xs" role="complementary">
                    <div className="book-img">
                        <img title={book.volumeInfo.title} src = {book.volumeInfo.imageLinks.thumbnail}/>
                    </div>
                </div>
                <div className="book-info col-xs-8 col-sm-10 hidden-xs">
                    <dt><strong>Authors:</strong>{book.volumeInfo.authors}</dt>
                    <dt><strong>ISBN-10:</strong>{book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers.map(
                        keys => {
                            if (keys.type === "ISBN_10") return keys.identifier
                        }
                    )}</dt>
                    <dt><strong>ISBN-13:</strong>{ISBN13}</dt>
                    <dt><strong>Published Date:</strong>{book.volumeInfo.publishedDate}</dt>
                    <dt><strong>Publisher:</strong>{book.volumeInfo.publisher}</dt>
                    <dt><strong>Total Pages:</strong>{book.volumeInfo.pageCount}</dt>
                </div>
            </div>
        <div className="detail-blocks">
            <div className="RyCxoe" aria-level="3" role="heading">Buy A New One</div>
            <div>
                <div className="row">
                <div className="col-6">
                Google Play Books
                </div>
                <div className="col-4 float-lg-right">
                    {(book.saleInfo.retailPrice === undefined)? "Currently Not Available" : `${book.saleInfo.retailPrice.amount}$`}
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-6">
                Buy it on Amazon
                     </div>
                <div className="col-4 float-lg-right">
                    <a className="btn btn-primary"
                       href={`https://www.amazon.com/s?k=${ISBN13}&i=stripbooks&linkCode=qs`}
                       role="button">Search</a>
                </div>
        </div>
        </div>
        </div>
    )
}

export default Details