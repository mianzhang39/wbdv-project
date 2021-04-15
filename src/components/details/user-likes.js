import React from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import './details.css'


const UserLikes = () => {
    const {role,ID} = useParams()
    const history = useHistory()
    return(
        <div className="row">
            <div className="col-6">
                <label className="RyCxoe"
                       aria-level="3"
                       role="heading">
                    This book is liked by <Link to={`/${ID}/likes`}> 53 </Link> users
                </label>
            </div>
            <div className="col-6">
                {(role == "buyer" || role == "seller") &&
                <button
                    className='btn btn-primary'
                    onClick={() => {alert("Thank you for your sharing")}}>
                    Like
                </button>}

                {role == "guest" &&
                <button
                    className='btn btn-primary'
                    onClick={() => {
                        alert("You haven't registered yet")
                        history.push("/signup")}}>
                    Like
                </button> }
            </div>
        </div>
    )

}
export default UserLikes