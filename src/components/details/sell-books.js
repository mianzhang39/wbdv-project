import {React,useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import "./details.css"
import '../components.css'
import "../homepage/homepage.css"
import BasicComponentsWithSearchBar from "../logo-slogan-navigator/basic-components-with-search-bar";
import localBookService from "../../services/book/local-book-service"

const SellBooks = () => {
    const {role,ID} = useParams()
    const history = useHistory()
    const [cachedItem,useCachedItem] = useState({})

    return(
        <div className="bg-pic">
            <BasicComponentsWithSearchBar/>
            <hr className="horizontal-line"/>
            <div className="row">
                <label className="col-3 hello-text">
                    Price
                </label>
                <div className="col-7 search-bar input-group input-group-lg">
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="Input a selling price"
                   />
                </div>
                <div className="col-2 search-button">
                    <button type="button"
                            className="btn btn-outline-primary btn-lg"
                            onClick={() => {
                                alert("Request submitted successfully")
                                history.push(`/${role}/details/${ID}`)
                            }}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SellBooks