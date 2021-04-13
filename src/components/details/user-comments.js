import React from "react";
import {Link} from "react-router-dom";
import './details.css'


const UserComments = () => {
    return(
        <>
                <label className="RyCxoe"
                       aria-level="3"
                       role="heading">
                    Comment area
                </label>

                <div className="temp">
                    <Link><label>Simon Simmons</label></Link> <label>:Wow! I like it!</label>
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
                <button className='float-right btn btn-primary '> Submit </button>
        </>
    )

}
export default UserComments