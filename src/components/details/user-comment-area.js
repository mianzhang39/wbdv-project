import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import './details.css'
import localBookService from "../../services/book/local-book-service"
import userService from "../../services/user/users-service";

const UserCommentArea = () => {
    const [book, setBook] = useState()
    const {ID} = useParams()
    useEffect(() => {
        localBookService.findLocalBookById(ID)
            .then(result => setBook(result))
    },[ID])

    return(
        <>
            <label className="RyCxoe"
                   aria-level="3"
                   role="heading">
                Comment area
            </label>

            <div className="temp">

                {/*<Link to={"/public/profile"}>*/}
                {/*    <label>*/}
                {/*        Zoey*/}
                {/*    </label>*/}
                {/*</Link>*/}
                {/*<label>*/}
                {/*    :Wow! I like it!*/}
                {/*</label>*/}

                <ul>
                    {
                        book.commentedBy && book.commentedBy.map(comment => {
                                return (
                                    <li> {comment.username}<span>&nbsp;&nbsp;</span>{comment.comment} </li>
                                )
                            })
                    }
                </ul>

            </div>

            <label className="RyCxoe"
                   aria-level="3"
                   role="heading">
                Leave your ideas about this book...
            </label>
            <br/>
            <textarea className='write-comment'></textarea>

        </>
    )

}
export default UserCommentArea

