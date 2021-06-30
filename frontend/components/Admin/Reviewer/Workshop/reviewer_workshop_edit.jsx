import React, {useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';
import { send } from 'emailjs-com';

export default function  Reviewer_Workshop_Edit(){

     
    var workshopUpdate = reactLocalStorage.getObject('Reviewer_Workshop_Edit');
    // console.log(workshopUpdate);
    // colsole.log(1);
    const id = workshopUpdate[0];
    const [topic, setTopic] = useState(workshopUpdate[1]);
    const [organization, setOrganization] = useState(workshopUpdate[2]);
    const [presenter, setPresenter] = useState(workshopUpdate[3]);
    const [phone, setPhone] = useState(workshopUpdate[4]);
    const [email, setEmail] = useState(workshopUpdate[5]);
    const [qualification, setQualification] = useState(workshopUpdate[6]);
    const [platform, setPlatform] = useState(workshopUpdate[7]); 
    const [date, setDate] = useState(workshopUpdate[8]);
    const [from_time, setFrom_time] = useState(workshopUpdate[9]);
    const [to_time, setTo_time] = useState(workshopUpdate[10]);
    const [document, setDocument] = useState(workshopUpdate[11]);
    const [description, setDescription] = useState(workshopUpdate[12]);
    const [status, setStatus] = useState(workshopUpdate[15]);
    const [toSend, setToSend] = useState({
        from_name: topic,
        reply_to:email,
      });
    function sendData(e){
        e.preventDefault();
        const workshopUpdate = {
            topic,
            organization,
            presenter,
            phone,
            email,
            qualification,
            platform,
            date,
            from_time,
            to_time,
            document,
            description,
            status
        }

        axios.put("http://localhost:6060/workshop/update/"+id, workshopUpdate).then(() => {
            const id = 0;
            send(
                'service_zj3eu8g',
                'template_7z0ihh9',
                toSend,
                'user_iaQm5Tj9yssvCrb7KNE72'
              )
                .then((response) => {
                  console.log('SUCCESS!', response.status, response.text);
               
            Swal.fire({
                title: "Success!",
                text: "Successfully Updated WorkShop Details!",
                icon: "success",
                confirmButtonText: "Ok",
                type: "success"}).then(okay => {
                    if(okay){

                        window.location.href="/view-all-ws";
                    }
                });
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
            }).catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: "Not Updated WorkShop Details!",
                    icon: "error",
                    confirmButtonText: "Ok",
                    type: "success"})
                })
    }

    return(
        <div className="container">
            <h3>Edit Workshop Details.</h3>
            <form onSubmit={sendData}>
                <div className="card mb-1" style={{maxWidth: "fixed"}}>
                    <div className="row g-0">
                        <div className="col-md-5" style={{width:"", height:""}}>
                            <div className="mt-5">
                                <img src="https://image.freepik.com/free-vector/search-social-personal-profile-vector-illustration_81522-1253.jpg" className="mt-5 img-fluid rounded-start" alt="update-image"/>
                                {/* <img src="https://image.freepik.com/free-vector/flat-design-content-management-system-illustrated_23-2148816268.jpg" className="mt-5 img-fluid rounded-start" alt="update-image"/> */}
                            </div>
                        </div>
                        <div className="col-md-7" style={{backgroundColor:"#2C3E50" , width:"", height:""}}>
                            <div className="card-body">
                                {/* <h5 className="card-title">Edit</h5> */}
                                <div className="col-md-12 text-light">
                                    <div className="row mb-1">
                                        <div className="col-4 mb-1">
                                            <label for="" className="form-label text-left">Topic: </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-warning"></i></span>
                                                <input type="text" className="input-group form-control" id="topic" name="topic" value={topic}
                                                    onChange={(e)=>{
                                                        setTopic(e.target.value);
                                                    }}/>
                                            </div> 
                                        </div>

                                        <div className="mb-1 col-4">
                                            <label for="" className="form-label">Organization: </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-dark"><i className="bi bi-building text-warning"></i></span>
                                                <input type="text" className="input-group form-control" id="organization" name="organization" value={organization}
                                                 onChange={(e)=>{
                                                    setOrganization(e.target.value);
                                                }}/>
                                            </div> 
                                        </div>
                                        
                                        <div className="mb-1 col-4">
                                        <label for="" className="form-label text-left">Status: </label>
                                    
                                            <div className="input-group">
                                                <span className="input-group-text bg-dark"><i className="bi bi-patch-question text-warning"></i></span>
                                                <input type="text" className="input-group form-control" id="Status" name="Status" value={status}
                                                     onChange={(e)=>{
                                                        setStatus(e.target.value);
                                                    }}/>
                                            </div> 
                                        </div>
                                        
                                    </div>

                                    <div className="row mb-1">
                                        <div className="col-6 mb-1">
                                            <label for="" className="form-label">Presenter's name: </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-dark"><i className="bi bi-person text-warning"></i></span>
                                                <input type="text" className="input-group form-control" id="presenter" name="presenter" value={presenter}
                                                     onChange={(e)=>{
                                                        setPresenter(e.target.value);
                                                    }}/>
                                            </div> 
                                        </div>

                                        <div className="col-6 mb-1">
                                            <label for="" className="form-label">Email: </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-dark"><i className="bi bi-envelope text-warning"></i></span>
                                                <input type="email" className="input-group form-control" id="email" name="email" value={email}
                                                 onChange={(e)=>{
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
                                                <input type="phone" className="input-group form-control" id="phone" name="phone" value={phone}
                                                 onChange={(e)=>{
                                                    setPhone(e.target.value);
                                                }}/>
                                            </div> 
                                        </div>

                                        <div className="col-6 mb-1">
                                            <label for="" className="form-label">Platform: </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-dark"><i className="bi bi-cast text-warning"></i></span>
                                                <input className="input-group form-control" id="platform " name="platform " value={platform}
                                                 onChange={(e)=>{
                                                    setPlatform(e.target.value);
                                                }}/>
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Qualification: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-code text-warning"></i></span>
                                            <textarea className="input-group form-control" id="qualification" name="qualification"  rows="3" cols="50" value={qualification}
                                             onChange={(e)=>{
                                                setQualification(e.target.value);
                                            }}></textarea>
                                        </div> 
                                    </div>

                                    <div className="row mb-1">
                                        <div className="col-4 mb-1">
                                            <label for="" className="form-label text-left">Date: </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-dark"><i className="bi bi-calendar3 text-warning"></i></span>
                                                <input type="date" className="input-group form-control" id="date" name="date" value={date}
                                                 onChange={(e)=>{
                                                    setDate(e.target.value);
                                                }}/>
                                            </div> 
                                        </div>

                                        <div className="col-4 mb-1">
                                            <label for="" className="form-label">From: </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-dark"><i className="bi bi-alarm text-warning"></i></span>
                                                <input type="time" className="input-group form-control" id="from_time" name="from_time" value={from_time}
                                                 onChange={(e)=>{
                                                    setFrom_time(e.target.value);
                                                }}/>
                                            </div> 
                                        </div>

                                        <div className="col-4 mb-1">
                                            <label for="" className="form-label">To: </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-dark"><i className="bi bi-alarm text-warning"></i></span>
                                                <input type="time" className="input-group form-control" id="to_time " name="to_time " value={to_time}
                                                 onChange={(e)=>{
                                                    setTo_time(e.target.value);
                                                }}/>
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Upload Document: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-paperclip text-warning"></i></span>
                                            <textarea className="input-group form-control" id="document" name="document" rows="3" cols="50" value={document}
                                             onChange={(e)=>{
                                                setDocument(e.target.value);
                                            }}></textarea>
                                        </div> 
                                    </div>
                                    {/* <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Status: </label>
                                    <input type="text" className="input-group form-control" id="Status" name="Status" value={status}
                                                     onChange={(e)=>{
                                                        setStatus(e.target.value);
                                                    }}/>
                                                    </div> */}
                                    <div className="mb-1 text-left">
                                        <label for="" className="form-label text-left">Description: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-code text-warning"></i></span>
                                            <textarea className="input-group form-control" id="description" name="description" rows="3" cols="50" value={description}
                                             onChange={(e)=>{
                                                setDescription(e.target.value);
                                            }}></textarea>
                                        </div> 
                                    </div>

                                    <div className="mt-2">
                                        <center>
                                        <button type="submit" className="btn btn-warning">Edit Details</button>    
                                        </center> 
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>      
            
        )
    
}

