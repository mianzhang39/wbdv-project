import React, {useEffect, useState} from "react";
import './details.css'
import userService from "../../services/user/users-service";
import localBookService from "../../services/book/local-book-service";


const UserCommentInput = ({user,
                          item}) => {
    const update = () =>{
        userService.updateUser(cachedUser)
            .then(r => console.log(r))
        localBookService.updateLocalBook(book)
            .then(r => console.log(r))
    }
const [cachedUser,setCachedUser] = useState(user)
const [comment,setComment] = useState("")
    const [book, setBook] = useState(item)
    useEffect(() => {
    },[])
    return(
        <div>
        <div>
        <label className="RyCxoe"
               aria-level="3"
               role="heading">
            Comment area
        </label>
            <div>
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
            </div>
        </div>

                {(user.role == "buyer" || user.role == "seller") &&
                <>
                    <label className="RyCxoe"
                         aria-level="3"
                         role="heading">
                    Leave your ideas about this book...
                </label>
                    <br/>
                    <textarea className='write-comment'
                    onChange={(e) => setComment(e.target.value)
                    }>

                            </textarea>
                    <br/>
                    <button
                        className='btn btn-primary float-right '
                        onClick={() => {
                            const userComment = user.comments.push({bookId: item._id, comment: comment})
                            setCachedUser(cachedUser => ({...cachedUser,userComment}))
                            const commentList = book.commentedBy.push({username:user.username, comment: comment})
                            setBook(book => ({...book,commentList}))
                            update()
                            }}>
                        Submit
                    </button>
                </>
                }
            </div>
    )

}
export default UserCommentInput