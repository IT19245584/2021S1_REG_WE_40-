import React, {Component} from 'react';
import axios from 'axios';

class Revie_Workshop_Edit extends Component{
    

    render(){
        return(
            <div class="container">
                <h3>Edit Workshop Details.</h3>
              

                {/* <center> */}
                <div class="card mb-1" style={{maxWidth: "fixed"}}>
                    <div class="row g-0">
                        <div class="col-md-5 bg-dark" style={{width:"500px", height:""}}>
                            <div class="mt-5">
                                <img src="https://thumbs.dreamstime.com/z/search-social-personal-profile-vector-illustration-search-social-personal-profile-vector-illustration-man-look-analyz-social-media-139242260.jpg" class="mt-5 img-fluid rounded-start" alt="update-image"/>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">Edit</h5>
                                <div class="col-md-12">

                                    <div class="row mb-1">
                                    <div class="col-6 mb-1">
                                        <label for="" class="form-label text-left">Topic: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-card-heading text-warning"></i></span>
                                            <input type="text" class="input-group form-control" id="topic" name="topic" value="topic"/>
                                        </div> 
                                    </div>

                                    <div class="mb-1 col-6">
                                        <label for="" class="form-label">Organization: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-building text-warning"></i></span>
                                            <input type="text" class="input-group form-control" id="organization" name="organization" value="organization"/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div class="row mb-1">
                                    <div class="col-6 mb-1">
                                        <label for="" class="form-label">Presenter's name: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-person text-warning"></i></span>
                                            <input type="text" class="input-group form-control" id="presenter" name="presenter" value="presenter"/>
                                        </div> 
                                    </div>

                                    <div class="col-6 mb-1">
                                        <label for="" class="form-label">Email: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-envelope text-warning"></i></span>
                                            <input type="email" class="input-group form-control" id="" name="" value=""/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div class="row mb-1">
                                    <div class="col-6 mb-1">
                                        <label for="" class="form-label text-left">Phone Number: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-telephone text-warning"></i></span>
                                            <input type="phone" class="input-group form-control" id="" name="" value=""/>
                                        </div> 
                                    </div>

                                    <div class="col-6 mb-1">
                                        <label for="" class="form-label">Platform: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-paperclip text-warning"></i></span>
                                            <input class="input-group form-control" id="platform " name="platform " value="platform "/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div class="mb-1 text-left">
                                        <label for="" class="form-label text-left">Qualification: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-code text-warning"></i></span>
                                            <textarea class="input-group form-control" id="qualification" name="qualification"  rows="3" cols="50" value="qualification"></textarea>
                                        </div> 
                                    </div>

                                    <div class="row mb-1">
                                    <div class="col-4 mb-1">
                                        <label for="" class="form-label text-left">Date: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-telephone text-warning"></i></span>
                                            <input type="date" class="input-group form-control" id="date" name="date" value="date"/>
                                        </div> 
                                    </div>

                                    <div class="col-4 mb-1">
                                        <label for="" class="form-label">From: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-paperclip text-warning"></i></span>
                                            <input type="time" class="input-group form-control" id="from_time" name="from_time" value="from_time"/>
                                        </div> 
                                    </div>

                                    <div class="col-4 mb-1">
                                        <label for="" class="form-label">To: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-paperclip text-warning"></i></span>
                                            <input type="time" class="input-group form-control" id="to_time " name="to_time " value="to_time "/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div class="mb-1 text-left">
                                        <label for="" class="form-label text-left">Upload Document: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-code text-warning"></i></span>
                                            <textarea class="input-group form-control" id="document" name="document" rows="3" cols="50" value="document"></textarea>
                                        </div> 
                                    </div>

                                    <div class="mb-1 text-left">
                                        <label for="" class="form-label text-left">Description: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-code text-warning"></i></span>
                                            <textarea class="input-group form-control" id="description" name="description" rows="3" cols="50" value="description"></textarea>
                                        </div> 
                                    </div>

                                    <div class="mt-2">
                                        <center>
                                        <button type="submit" class="btn btn-success mx-5">Edit </button>   
                                        {/* make the button reset */}
                                        <button type="button" class="btn btn-danger">Reset</button>   
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
}
export default Revie_Workshop_Edit;
