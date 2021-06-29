import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function Reviewer_ResearchPaper_Edit(){
    
    var researchpaperUpdate = reactLocalStorage.getObject('Reviewer_ResearchPaper_Edit');

    const id = researchpaperUpdate[0];
    const [topic, setTopic] = useState(researchpaperUpdate[1]);
    const [university, setUniversity] = useState(researchpaperUpdate[2]);
    const [purpose, setPurpose] = useState(researchpaperUpdate[3]);
    const [team_leader, setTeam_leader] = useState(researchpaperUpdate[4]);
    const [email, setEmail] = useState(researchpaperUpdate[5]);
    const [phone, setPhone] = useState(researchpaperUpdate[6]);
    const [document, setDocument] = useState(researchpaperUpdate[7]); //cloudnary?
    const [description, setDescription] = useState(researchpaperUpdate[8]);

    
    function setUpdate(e){
        e.preventDefault();
        const updateDetails = {
            topic,
            university,
            purpose,
            team_leader,
            email,
            phone,
            document,
            description,
        }

        axios.put("http://localhost:8080/researchpapers/update/"+id,updateDetails).then(() => {
            const id = 0;
            Swal.fire({
                title: "Success!",
                text: "Successfully Updated!",
                icon: "success",
                confirmButtonText: "Ok",
                type: "success"}).then(done => {
                    if(done){
                        window.location.href="//view-all-rp";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: "Not Updated!",
                    icon: "error",
                    confirmButtonText: "Ok",
                    type: "success"})
                })
         
    }
        return(
            <div className="container">
                <h3>Edit Research Paper Details.</h3>
              
                <form class="" onSubmit={setUpdate}>
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
                                            <input type="text" className="input-group form-control" id="topic" name="topic" value={topic} onChange={(e) => {
                                                setTopic(e.target.value);
                                            }}/>
                                        </div> 
                                    </div>

                                    <div className="mb-1 col-6">
                                        <label for="" className="form-label">University: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-building text-warning"></i></span>
                                            <input type="text" className="input-group form-control" id="university" name="university" value={university} onChange={(e) => {
                                                setUniversity(e.target.value);
                                            }}/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Purpose: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-code text-warning"></i></span>
                                            <textarea className="input-group form-control" id="purpose" name="purpose"  rows="3" cols="50" value={purpose}onChange={(e) => {
                                                setPurpose(e.target.value);
                                            }}>
                                            </textarea>
                                        </div> 
                                    </div>

                                    <div className="row mb-1">
                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label">Team Leader's name: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-person text-warning"></i></span>
                                            <input type="text" className="input-group form-control" id="team_leader" name="team_leader" value={team_leader} onChange={(e) => {
                                                setTeam_leader(e.target.value);
                                            }}/>
                                        </div> 
                                    </div>

                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label">Email: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-envelope text-warning"></i></span>
                                            <input type="email" className="input-group form-control" id="email" name="email" value={email} onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="row mb-1">
                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label text-left">Phone Number: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-telephone text-warning"></i></span>
                                            <input type="phone" className="input-group form-control" id="phone" name="phone" value={phone} onChange={(e) => {
                                                setPhone(e.target.value);
                                            }}/>
                                        </div> 
                                    </div>

                                    <div className="col-6 mb-1">
                                        <label for="" className="form-label">Upload pdf: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-paperclip text-warning"></i></span>
                                            <input className="input-group form-control" id="document" name="document" value={document} onChange={(e) => {
                                                setDocument(e.target.value);
                                            }}/>
                                        </div> 
                                    </div>
                                    </div>

                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Description: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-code text-warning"></i></span>
                                            <textarea className="input-group form-control" id="description" name="description" rows="3" cols="50" value={description} onChange={(e) => {
                                                setDescription(e.target.value);}}>
                                            </textarea>
                                        </div> 
                                    </div>

                                    <div className="mt-2">
                                        <center>
                                        <button type="submit" className="btn btn-success mx-5">Edit </button>   
                                        </center> 
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </center> */}
                </form>
            </div>      
            
    )
}

