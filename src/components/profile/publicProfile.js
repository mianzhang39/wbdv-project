import React, {useState} from 'react'
import BasicComponentsWithSearchBar from "../logo-slogan-navigator/basic-components-with-search-bar";
import signin_search_bar from "../logo-slogan-navigator/signin_search_bar";
import SignInSearchBar from "../logo-slogan-navigator/signin_search_bar";

const PublicProfile=()=>{
    const [signIn,setSignIn]=useState({});
    return (
        <>

                    <div className='col-8 padding'>
                        <div className='card'>
                            <div className='card-header bg-white'>
                                <div className='mb-3 row row-padding'>
                                    <div className='col-8'>
                                        <h3>My account</h3>
                                    </div>

                                </div>
                            </div>

                            <div className='card-body shadow'>
                                <h6 className="heading-small text-muted ">User information</h6>
                                <div className='row row-padding'>
                                    <div className='col-6'>
                                        <div className="form-group focused">
                                            <label className="form-control-label">Username</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="Username" value="Zoey"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-control-label">Email address</label>
                                            <input type="email"
                                                   className="form-control form-control-alternative"
                                                   placeholder="123@gmail.com"/>

                                        </div>
                                    </div>
                                </div>



                                <h6 className="heading-small text-muted mb-4">About me</h6>

                                <div className="form-group">
                                    <label>About Me</label>
                                    <textarea rows="4" className="form-control form-control-alternative"
                                              placeholder="A few words about you ...">Book Lover</textarea>
                                </div>

                            </div>
                        </div>
                    </div>


            {/*<div className="row">*/}
            {/*    {*/}
            {/*        role==='guest' &&*/}
            {/*            <guest_profile role={role}/>*/}
            {/*    }*/}
            {/*    {*/}
            {/*        role==='buyer' &&*/}
            {/*        <nonGuest role={role}/>*/}
            {/*    }*/}
            {/*    {*/}
            {/*        role==='seller' &&*/}
            {/*        <nonGuest role={role}/>*/}
            {/*    }*/}

            {/*</div>*/}
        </>

    )
}

export default PublicProfile