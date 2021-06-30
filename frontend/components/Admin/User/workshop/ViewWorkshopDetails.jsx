import React, {useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';
import HomePageNav from '../../../navbars/homePageNav';

export default function ShowStudent(){

    var ShowStudent = reactLocalStorage.getObject('ShowStudent');

    const [Workshops, setWorkshops] = useState([]);

    const id = ShowStudent[0];

    const [topic, setTopic] = useState(ShowStudent[1]);
    const [organization, setOrganization] = useState(ShowStudent[2]);
    const [presenter, setPresenter] = useState(ShowStudent[3]);
    const [phone, setPhone] = useState(ShowStudent[4]);
    const [email, setEmail] = useState(ShowStudent[5]);
    const [qualification, setQualification] = useState(ShowStudent[6]);
    const [platform, setPlatform] = useState(ShowStudent[7]);
    const [date, setDate] = useState(ShowStudent[8]);
    const [from_time, setFrom_time] = useState(ShowStudent[9]);
    const [to_time, setTo_time] = useState(ShowStudent[10]);
    const [document, setDocument] = useState(ShowStudent[11]);
    const [description, setDescription] = useState(ShowStudent[12]);
    const [isDisabled, setDisabled] = useState(true);

    function sendData(e){
        e.preventDefault();
        
        const showStudent = {
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
            description


        }

        
        axios.get("http://localhost:6060/workshop/get/:id"._id, showStudent).then(()=>{
            const id = 0;
		// 	
// Swal.fire({  
		// 	title: "Success!",
		// 	text: "Details Updating Success!",
		// 	icon: 'success',
		// 	confirmButtonText: "OK",
		// 	type: "success"}).then(okay => {
		// 		if (okay) {
		// 			window.location.href = "/";
		// 		}
		// 		});

			
		// }).catch((err)=>{

		// 	Swal.fire({  
		// 	title: "Error!",
		// 	text: "Details Updating Not Saved",
		// 	icon: 'error',
		// 	confirmButtonText: "OK",
		// 	type: "success"})
		})
    }
    return(
<div> 
    <HomePageNav/>
        <div className="container"><br/>
        <h3>View Workshop Details</h3><br/>
        <form className="row" onSubmit={sendData}>
            
            <div className="col-5 form-group">
                <label for="name" className="form-label">Topic</label>
                    <input type="text" className="form-control" id="name"  disabled={true} value={topic}
                    onChange={(e)=>{
                        setTopic(e.target.value);
                    }}/>
            </div>

            <div className="col-5 form-group">
                <label for="age" className="form-label">Organization</label>
                    <input type="text" className="form-control" id="age"  value={organization}
                    onChange={(e)=>{
                        setOrganization(e.target.value);
                    }} disabled/>
            </div>

            <div className="col-5 form-group">
                <label for="gender" className="form-label">Presenter</label>
                    <input type="text" className="form-control" id="gender"  value={presenter}
                    onChange={(e)=>{
                        setPresenter(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="gender"  value={phone}
                    onChange={(e)=>{
                        setPhone(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Email</label>
                    <input type="text" className="form-control" id="gender"  value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Qualification</label>
                    <input type="text" className="form-control" id="gender"  value={qualification}
                    onChange={(e)=>{
                        setQualification(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Platform</label>
                    <input type="text" className="form-control" id="gender"  value={platform}
                    onChange={(e)=>{
                        setPlatform(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Date</label>
                    <input type="text" className="form-control" id="gender"  value={date}
                    onChange={(e)=>{
                        setDate(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">From Date</label>
                    <input type="text" className="form-control" id="gender"  value={from_time}
                    onChange={(e)=>{
                        setFrom_time(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">To Date</label>
                    <input type="text" className="form-control" id="gender"  value={to_time}
                    onChange={(e)=>{
                        setTo_time(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Document</label>
                    <input type="text" className="form-control" id="gender"  value={document}
                    onChange={(e)=>{
                        setDocument(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">Description</label>
                    <input type="text" className="form-control" id="gender"  value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }} disabled/>
            </div>
        </form>
        </div>
        </div>
    )
                }
