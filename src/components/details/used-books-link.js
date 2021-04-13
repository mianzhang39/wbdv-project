import {Link} from "react-router-dom";
import React from "react";
import './details.css'

const BuyUsedBooks = () => {
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
                        <Link><label>each seller's link</label></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyUsedBooks