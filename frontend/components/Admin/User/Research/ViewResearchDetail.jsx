import React, {useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';
import HomePageNav from '../../../navbars/homePageNav';

export default function ShowStudent(){

    var ShowStudent = reactLocalStorage.getObject('ShowStudent');

    const [papers, setPapers] = useState([]);

    const id = ShowStudent[0];

   
    const [topic, setTopic] = useState("");
    const [university, setUniversity] = useState("");
    const [purpose, setPurpose] = useState("");
    const [team_leader, setTeam_leader] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [document, setDocument] = useState("");
    const [description, setDescription] = useState("");
    const [isDisabled, setDisabled] = useState(true);

    function sendData(e){
        e.preventDefault();
        
        const showStudent = {
            topic, 
            university,
            purpose,
            team_leader,
            email,
            phone,
            document,
            description


        }

        
        axios.get("http://localhost:6060/researchPaper/get/:id"._id, showStudent).then(()=>{
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
        <h3>View Research Details</h3><br/>
        <form className="row" onSubmit={sendData}>
            
            <div className="col-5 form-group">
                <label for="name" className="form-label">Topic</label>
                    <input type="text" className="form-control" id="name"  disabled={true} value={topic}
                    onChange={(e)=>{
                        setTopic(e.target.value);
                    }}/>
            </div>

            <div className="col-5 form-group">
                <label for="age" className="form-label">University</label>
                    <input type="text" className="form-control" id="age"  value={university}
                    onChange={(e)=>{
                        setUniversity(e.target.value);
                    }} disabled/>
            </div>

            <div className="col-5 form-group">
                <label for="gender" className="form-label">Presenter</label>
                    <input type="text" className="form-control" id="gender"  value={purpose}
                    onChange={(e)=>{
                        setPurpose(e.target.value);
                    }} disabled/>
            </div>
            <div className="col-5 form-group">
                <label for="gender" className="form-label">team_leader</label>
                    <input type="text" className="form-control" id="gender"  value={team_leader}
                    onChange={(e)=>{
                        setTeam_leader(e.target.value);
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
                <label for="gender" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="gender"  value={phone}
                    onChange={(e)=>{
                        setPhone(e.target.value);
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
