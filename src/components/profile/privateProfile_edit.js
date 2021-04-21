import React, {useState} from "react";
import './profile.css'
import '../components.css'

const PrivateProfileEdit = () =>{
    const [editing,setEditing]=useState(false)

    return (
        <>

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
                                               value="Zoey"/>
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

        </>

    )
}
export default PrivateProfileEdit