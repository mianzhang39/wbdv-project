import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './details.css'
import localBookService from "../../services/book/local-book-service"
import offerService from "../../services/offer/offer-service"

const BuyUsedBooks = ({item}) => {
    const [book, setBook] = useState(item)
    const {ID} = useParams()

    return(
        <>
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
                        {/*<label>*/}
                        {/*    $20 -------*/}
                        {/*</label>*/}
                        {/*<Link to={"/public/profile"}>*/}
                        {/*    <label>*/}
                        {/*        Zoey*/}
                        {/*    </label>*/}
                        {/*</Link>*/}

                        <ul>
                            {
                                book.selledBy && book.selledBy.map(user => {
                                    return (
                                        <li>
                                            <>
                                            <Link to ={`/profile/${user.username}`}>
                                                {user.username}
                                            </Link>
                                            <span>&nbsp;&nbsp;</span>

                                            {user.price}
                                            </>
                                        </li>
                                    )
                                })
                            }
                        </ul>






                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyUsedBooks