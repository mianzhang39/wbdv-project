import React, {useState} from 'react'
import {useHistory, useParams} from "react-router-dom";
import BasicComponentsWithoutSearchBar from "../logo-slogan-navigator/basic-components-without-search-bar";
import './profile.css'
import '../components.css'


const PrivateProfile = () => {
    const [editing,setEditing]=useState(false)

    return(
        <div className="bg-pic">
            <BasicComponentsWithoutSearchBar/>

            <hr className="horizontal-line"/>
            <br/>
            <br/>

            <h1 className=" text-gray welcome-sentence">Hello user, this is your profile page.</h1>
            <div className="container-fluid padding">
                <div className=" mb-3 row ">
                    <div className="col-4">
                        <div className="card card-profile shadow">

                            <div className="card-header">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <h2>Profile</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">

                                <div className="text-center">
                                    <h3>
                                        Zoey<span className="font-weight-light"></span>
                                    </h3>
                                    <div className="h5 font-weight-300">
                                        <i className="ni location_pin mr-2"></i>Boston
                                    </div>
                                    <div className="col">
                                        <div className="row md-3">
                                            <div className='col-3'>
                                                <h6>22 follwers</h6>
                                            </div>
                                            <div className='col-3'>
                                                <h6>10 follwoing</h6>
                                            </div>
                                            <div className='col-3'>
                                                <h6>10 review</h6>
                                            </div>
                                            <div className='col-3'>
                                                <h6>3 favorites</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p>description</p>
                                        <br/>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <a href="#" className="btn btn-sm btn-info float-right">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {!editing &&
                        <>
                    <div className='col-8 padding'>
                        <div className='card'>
                            <div className='card-header bg-white'>
                                <div className='mb-3 row row-padding'>
                                    <div className='col-8'>
                                        <h3>My account</h3>
                                    </div>
                                    <div className="col-4 ">
                                        <i onClick={() => setEditing(true)}
                                           className="btn btn-sm btn-primary float-right">Edit Profile</i>
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
                                                   value="123@gmail.com"/>

                                        </div>
                                    </div>
                                </div>
                                <div className='row row-padding'>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="form-control-label">First name</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="First name" value="Zoey"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group ">
                                            <label className="form-control-label">Last name</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="Last name" value="Zhang"/>
                                        </div>
                                    </div>
                                </div>

                                <h6 className="heading-small text-muted mb-4">Contact information</h6>
                                <div className="row row-padding">
                                    <div className="col-md-12">
                                        <div className="form-group ">
                                            <label className="form-control-label">Address</label>
                                            <input
                                                className="form-control form-control-alternative"
                                                placeholder="Home Address" value="Boston" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-padding">
                                    <div className="col-4">
                                        <div className="form-group focused">
                                            <label className="form-control-label">City</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="City" value="Boston"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group focused">
                                            <label className="form-control-label">Country</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="Country" value="United States"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label className="form-control-label">Postal code</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   value="02115"/>
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
                        </>}

                    {editing &&
                        <>
                    <div className='col-8 padding'>
                        <div className='card'>
                            <div className='card-header bg-white'>
                                <div className='mb-3 row row-padding'>
                                    <div className='col-8'>
                                        <h3>My account</h3>
                                    </div>
                                    <div className="col-4 ">
                                        <i onClick={() => setEditing(false)}
                                           className="btn btn-sm btn-primary float-right">Save</i>
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
                                                   placeholder="Zoey"/>
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
                                <div className='row row-padding'>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="form-control-label">First name</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="Zoey" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group ">
                                            <label className="form-control-label">Last name</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="Zhang" />
                                        </div>
                                    </div>
                                </div>

                                <h6 className="heading-small text-muted mb-4">Contact information</h6>
                                <div className="row row-padding">
                                    <div className="col-md-12">
                                        <div className="form-group ">
                                            <label className="form-control-label">Address</label>
                                            <input
                                                className="form-control form-control-alternative"
                                                placeholder="Boston" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-padding">
                                    <div className="col-4">
                                        <div className="form-group focused">
                                            <label className="form-control-label">City</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="Boston"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group focused">
                                            <label className="form-control-label">Country</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="United States"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label className="form-control-label">Postal code</label>
                                            <input type="text"
                                                   className="form-control form-control-alternative"
                                                   placeholder="02115"/>
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
                        </>}


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
        </div>
    )

}

export default PrivateProfile





