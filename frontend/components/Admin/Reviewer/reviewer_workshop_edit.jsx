import React, {Component} from 'react';
import axios from 'axios';

export default function  Revie_Workshop_Edit(){

        return(
            <div className="container">
                <h3>Edit Workshop Details.</h3>
              

                {/* <center> */}
                <div className="card mb-1" style={{maxWidth: "fixed"}}>
                    <div className="row g-0">
                        <div className="col-md-5 bg-dark" style={{width:"500px", height:""}}>
                            <div className="mt-5">
                                <img src="https://thumbs.dreamstime.com/z/search-social-personal-profile-vector-illustration-search-social-personal-profile-vector-illustration-man-look-analyz-social-media-139242260.jpg" className="mt-5 img-fluid rounded-start" alt="update-image"/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">Edit</h5>
                                <div className="col-md-12">

                                    <div className="row mb-1">
                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label text-left">Topic: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-warning"></i></span>
                                            <input type="text" className="input-group form-control" id="topic" name="topic" value="topic"/>
                                        </div> 
                                    </div>

                                    <div className="mb-1 col-6">
                                        <label for="" className="form-label">Organization: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-building text-warning"></i></span>
                                            <input type="text" className="input-group form-control" id="organization" name="organization" value="organization"/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="row mb-1">
                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label">Presenter's name: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-person text-warning"></i></span>
                                            <input type="text" className="input-group form-control" id="presenter" name="presenter" value="presenter"/>
                                        </div> 
                                    </div>

                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label">Email: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-envelope text-warning"></i></span>
                                            <input type="email" className="input-group form-control" id="email" name="email" value="email"/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="row mb-1">
                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label text-left">Phone Number: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-telephone text-warning"></i></span>
                                            <input type="phone" className="input-group form-control" id="phone" name="phone" value="phone"/>
                                        </div> 
                                    </div>

                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label">Platform: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-paperclip text-warning"></i></span>
                                            <input className="input-group form-control" id="platform " name="platform " value="platform "/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Qualification: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-code text-warning"></i></span>
                                            <textarea className="input-group form-control" id="qualification" name="qualification"  rows="3" cols="50" value="qualification"></textarea>
                                        </div> 
                                    </div>

                                    <div className="row mb-1">
                                    <div className="col-4 mb-1">
                                        <label for="" className="form-label text-left">Date: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-telephone text-warning"></i></span>
                                            <input type="date" className="input-group form-control" id="date" name="date" value="date"/>
                                        </div> 
                                    </div>

                                    <div className="col-4 mb-1">
                                        <label for="" className="form-label">From: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-paperclip text-warning"></i></span>
                                            <input type="time" className="input-group form-control" id="from_time" name="from_time" value="from_time"/>
                                        </div> 
                                    </div>

                                    <div className="col-4 mb-1">
                                        <label for="" className="form-label">To: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-paperclip text-warning"></i></span>
                                            <input type="time" className="input-group form-control" id="to_time " name="to_time " value="to_time "/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Upload Document: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-code text-warning"></i></span>
                                            <textarea className="input-group form-control" id="document" name="document" rows="3" cols="50" value="document"></textarea>
                                        </div> 
                                    </div>

                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Description: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-code text-warning"></i></span>
                                            <textarea className="input-group form-control" id="description" name="description" rows="3" cols="50" value="description"></textarea>
                                        </div> 
                                    </div>

                                    <div className="mt-2">
                                        <center>
                                        <button type="submit" className="btn btn-success mx-5">Edit </button>   
                                        {/* make the button reset */}
                                        <button type="button" className="btn btn-danger">Reset</button>   
                                        </center> 
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </center> */}
            </div>      
            
        )
    
}

