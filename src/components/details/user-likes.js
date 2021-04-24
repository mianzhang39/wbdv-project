import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import './details.css'
import localBookService from "../../services/book/local-book-service"
import userService from "../../services/user/users-service";


const UserLikes = () => {
    const history = useHistory()
    const [book, setBook] = useState()
    const [otherUser, setOtherUser] = useState()
    const {ID} = useParams()
    useEffect(() => {
        localBookService.findLocalBookById(ID)
            .then(result => setBook(result))
    },[ID])

    const [user,setUser]=useState({});
    useEffect(() => {
        userService.profile()
            .then(current => {
                userService.findUserByName(current.username)
                    .then(currentUser => {
                        setUser(currentUser)})
            })},[])

    const transfer = (role) => {
        switch (role) {
            case ("buyer" || "seller"):
                return (
                    <button
                        className='btn btn-primary'
                        onClick={() => {alert("Thank you for your sharing")}}>
                        Like
                    </button>
                )
            default:
                return(
                    <button
                    className='btn btn-primary'
                    onClick={() => {
                        alert("You haven't registered yet")
                        history.push("/signup")}}>
                    Like
                </button>
                )
        }}
    return(
        <div className="row">
            <div className="col-6">
                <label className="RyCxoe"
                       aria-level="3"
                       role="heading">
                    {/*This book is liked by <Link to={`/${ID}/likes`}> 53 </Link> users*/}
                    This book is liked by {book.likedBy.length} users
                    <ul>
                        {
                            book.likedBy && book.likedBy.map(
                                user => {
                                    return(
                                        <li>{user}</li>
                                    )
                            })
                        }
                    </ul>

                </label>
            </div>
            <div className="col-6">
                {/*{(user.role == "buyer" || role == "seller") &&*/}
                {/*<button*/}
                {/*    className='btn btn-primary'*/}
                {/*    onClick={() => {alert("Thank you for your sharing")}}>*/}
                {/*    Like*/}
                {/*</button>}*/}

                {/*{role == "guest" &&*/}
                {/*<button*/}
                {/*    className='btn btn-primary'*/}
                {/*    onClick={() => {*/}
                {/*        alert("You haven't registered yet")*/}
                {/*        history.push("/signup")}}>*/}
                {/*    Like*/}
                {/*</button> }*/}
                {transfer(user.role)}
            </div>
        </div>
    )

}
export default UserLikes