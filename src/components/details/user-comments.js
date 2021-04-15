import React from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import './details.css'


const UserComments = () => {
    const {role} = useParams()
    const history = useHistory()
    return(
        <>
                <label className="RyCxoe"
                       aria-level="3"
                       role="heading">
                    Comment area
                </label>

                <div className="temp">
                    <Link to={"/public/profile"}><label>Zoey</label></Link> <label>:Wow! I like it!</label>
                </div>

                <label className="RyCxoe"
                       aria-level="3"
                       role="heading">
                    Leave your ideas about this book...
                </label>
                <br/>
                <textarea className='write-comment'>

                    </textarea>
                <br/>

                {(role == "buyer" || role == "seller") &&
                <button
                    className='float-right btn btn-primary '
                    onClick={() => {alert("Thank you for your sharing")}}>
                    Submit
                </button>}

                {role == "guest" &&
                <button
                    className='float-right btn btn-primary '
                    onClick={() => {
                        alert("You haven't registered yet")
                        history.push("/signup")}}>
                    Submit
                </button> }
        </>
    )

}
export default UserComments