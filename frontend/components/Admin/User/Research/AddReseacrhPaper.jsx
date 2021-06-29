import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import HomePageNav from '../Navigation';
import Footer from '../../../footer/footer';

export default function ResearchPaper() {
    const [topic, settopic] = useState("");
    const [email, setEmail] = useState("");
    const [university, setuniversity] = useState("");
    const [purpose, setpurpose] = useState("");
    const [phone, setphone] = useState("");
    const [team_leader, setteam_leader] = useState("");
    const [document, setdocument] = useState("");
    const [description, setdescription] = useState("");


   const [isValid, setIsValid] = useState(false);
   const [message, setMessage] = useState('');
   const [Required, setRequired] = useState('*Required');

  

  const emailRegex = /\S+@\S+\.\S+/;
  const validateEmail = (event) => {
    const email = event;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Valid email.');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email.');
    }
    setEmail(event);
  };



   function sendDate(e){
    e.preventDefault();
    const document = "one";

    const addUser ={
        topic,
        university,
        purpose,
        email,
        phone,
        team_leader,
        document,
        description
     }
	
		axios.post("http://localhost:6060/researchPaper/add",addUser).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Successfully Added!",
			icon: 'success',
			confirmButtonText: "OK",
            confirmButtonColor: "#00B74A",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/research";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Add research Paper Unsuccess! Try Again.",
			icon: 'error',
			confirmButtonText: "OK",
            confirmButtonColor: "#F93154",
			type: "success"})
		})
	 }


  return (
    <div>
            <HomePageNav/>
           <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px"}}>Add Research Paper</h2>
                <div className="center" style={{marginLeft:'30%',marginRight:'30%',marginTop:'5%'}}>
                  <div class="mb-3">
                    <label class="form-label">Topic <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="topic" class="form-control"  placeholder="Enter Topic" onChange={(e) =>{
                              settopic(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">university <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="university" class="form-control"  placeholder="Enter university" onChange={(e) =>{
                              setuniversity(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">purpose </label>
                    <input type="purpose" class="form-control"  placeholder="Enter purposes" onChange={(e) =>{
                              setpurpose(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="email" class="form-control"  placeholder="Enter Email" onChange={(e) =>{
                              setEmail(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Phone Number <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="number" class="form-control"  placeholder="Enter Phone Number" onChange={(e) =>{
                              setphone(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">team_leader <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="team_leader" class="form-control"  placeholder="Enter team_leader" onChange={(e) =>{
                              setteam_leader(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Document <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="document" class="form-control"  placeholder="Enter Documents" onChange={(e) =>{
                              setdocument(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Description </label>
                    <input type="description" class="form-control"  placeholder="Enter Description" onChange={(e) =>{
                              setdescription(e.target.value);
                            }}/>
                  </div>
                  <div className="text-end pr-4">
                    <center><button  onClick={sendDate} type="submit" className="btn btn-dark btn-block mb-2" >
                    Submit <i className="fas fa-angle-double-right"></i>
                    </button></center>
                </div>
                </div>
       
     </div>
  );
}