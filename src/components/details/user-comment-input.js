import React, {useEffect, useState} from "react";
import './details.css'
import userService from "../../services/user/users-service";


const UserCommentInput = () => {
    const [user,setUser]=useState({});
    useEffect(() => {
        userService.profile()
            .then(current => {
                userService.findUserByName(current.username)
                    .then(currentUser => {
                        setUser(currentUser)})
            })},[])

    return(
            <div>
                {(user.role == "buyer" || user.role == "seller") &&
                <>
                    <label className="RyCxoe"
                         aria-level="3"
                         role="heading">
                    Leave your ideas about this book...
                </label>
                    <br/>
                    <textarea className='write-comment'>

                            </textarea>
                    <br/>
                    <button
                        className='float-right btn btn-primary '
                        onClick={() => {alert("Thank you for your sharing")}}>
                        Submit
                    </button>
                </>
                }
            </div>
    )

}
export default UserCommentInput