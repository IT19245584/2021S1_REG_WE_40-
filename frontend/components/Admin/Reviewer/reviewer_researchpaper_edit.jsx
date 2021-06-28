import React, {Component} from 'react';
import axios from 'axios';

export default function Reviewer_ResearchPaper_Edit(){
    
    
        return(
            <div className="container">
                <h3>Edit Research Paper Details.</h3>
              

                {/* <center> */}
                <div className="card mb-1" style={{maxWidth: "fixed"}}>
                    <div className="row g-0">
                        <div className="col-md-5 bg-dark" style={{width:"500px", height:""}}>
                            <div className="mt-5">
                                <img src="https://cdn.pixabay.com/photo/2016/09/15/18/28/update-1672346_960_720.png" className="mt-5 img-fluid rounded-start" alt="update-image"/>
                            </div>
                        </div>
                        <div className="col-md-7" style={{background:" #F2F3F4"}}>
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
                                        <label for="" className="form-label">University: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-building text-warning"></i></span>
                                            <input type="text" className="input-group form-control" id="university" name="" value=""/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Purpose: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-code text-warning"></i></span>
                                            <textarea className="input-group form-control" id="" name=""  rows="3" cols="50" value=""></textarea>
                                        </div> 
                                    </div>

                                    <div className="row mb-1">
                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label">Team Leader's name: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-person text-warning"></i></span>
                                            <input type="text" className="input-group form-control" id="" name="" value=""/>
                                        </div> 
                                    </div>

                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label">Email: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-envelope text-warning"></i></span>
                                            <input type="email" className="input-group form-control" id="" name="" value=""/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="row mb-1">
                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label text-left">Phone Number: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-telephone text-warning"></i></span>
                                            <input type="phone" className="input-group form-control" id="" name="" value=""/>
                                        </div> 
                                    </div>

                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label">Upload pdf: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-paperclip text-warning"></i></span>
                                            <input className="input-group form-control" id="" name="" value=""/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Description: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-code text-warning"></i></span>
                                            <textarea className="input-group form-control" id="" name="" rows="3" cols="50" value=""></textarea>
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

