import {React, useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import "./details.css"
import '../components.css'
import "../homepage/homepage.css"
import BasicComponentsWithSearchBar from "../logo-slogan-navigator/basic-components-with-search-bar";
import localBookService from "../../services/book/local-book-service"
import bookService from "../../services/book/book-service";
import userService from "../../services/user/users-service";

const SellBooks = () => {
    const {ID} = useParams();
    const history = useHistory();
    const [user,setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [local, setLocal] = useState({});
    const [price, setPrice] = useState("");

    const update = () =>{
        userService.updateUser(user)
            .then(r => console.log(r))
        localBookService.updateLocalBook(local)
            .then(r => console.log(r))
    }


    useEffect(() => {
        setLoading(true);
        userService.profile()
            .then(u => {
                userService.findUserByName(u.username)
                    .then(currentUser => {
                        setUser(currentUser)
                                localBookService.findLocalBookById(ID)
                                    .then(localBook => {
                                        setLocal(localBook)
                                        setLoading(false)

                            })
                    })

            })

    },[])



    if (loading) {return <div>loading...</div>}
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
                        onChange={(e) => setPrice(e.target.value)}
                   />
                </div>
                <div className="col-2 search-button">
                    <button type="button"
                            className="btn btn-outline-primary btn-lg"
                            onClick={() => {
                                const soldList = user.sold.push({bookId: ID, price: price})
                                setUser(user => ({...user, soldList}))
                                const offerList = local.selledBy.push({username:user.username, price: price})
                                setLocal( local => ({...local, offerList}))
                                update()
                                alert("Request submitted successfully")
                                history.push(`/details/${ID}`)
                            }}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SellBooks