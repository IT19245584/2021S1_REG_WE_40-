import React, {Component} from 'react';
import axios from 'axios';

class Reviewer_ResearchPaper_Edit extends Component{
    

    render(){
        return(
            <div class="container">
                <h3>Edit Research Paper Details.</h3>
              
                {/* <center> */}
                <div class="card mb-1" style={{maxWidth: "fixed"}}>
                    <div class="row g-0">
                        <div class="col-md-5 bg-dark" style={{width:"500px", height:""}}>
                            <div class="mt-5">
                                <img src="https://cdn.pixabay.com/photo/2016/09/15/18/28/update-1672346_960_720.png" class="mt-5 img-fluid rounded-start" alt="update-image"/>
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
                                            <input type="text" class="input-group form-control" id="" name="" value=""/>
                                        </div> 
                                    </div>

                                    <div class="mb-1 col-6">
                                        <label for="" class="form-label">University: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-building text-warning"></i></span>
                                            <input type="text" class="input-group form-control" id="" name="" value=""/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div class="mb-1 text-left">
                                        <label for="" class="form-label text-left">Purpose: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-code text-warning"></i></span>
                                            <textarea class="input-group form-control" id="" name=""  rows="3" cols="50" value=""></textarea>
                                        </div> 
                                    </div>

                                    <div class="row mb-1">
                                    <div class="col-6 mb-1">
                                        <label for="" class="form-label">Team Leader's name: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-person text-warning"></i></span>
                                            <input type="text" class="input-group form-control" id="" name="" value=""/>
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
                                        <label for="" class="form-label">Upload pdf: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-paperclip text-warning"></i></span>
                                            <input class="input-group form-control" id="" name="" value=""/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div class="mb-1 text-left">
                                        <label for="" class="form-label text-left">Description: </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-dark"><i class="bi bi-code text-warning"></i></span>
                                            <textarea class="input-group form-control" id="" name="" rows="3" cols="50" value=""></textarea>
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
export default Reviewer_ResearchPaper_Edit;