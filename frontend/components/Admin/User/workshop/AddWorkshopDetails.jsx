import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import HomePageNav from '../../../navbars/homePageNav';


export default function WorkshopDetails() {
    const [topic, settopic] = useState("");
    const [organization, setorganization] = useState("");
    const [email, setEmail] = useState("");
    const [presenter, setpresenter] = useState("");
    const [qualification, setqualification] = useState("");
    const [phone, setphone] = useState("");
    const [platform, setplatform] = useState("");
    const [date, setdate] = useState("");
    const [to_time, setto_time] = useState("");
    const [from_time, setfrom_time] = useState("");
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
    const addUser ={
        topic,
        organization,
        presenter,
        qualification,
        email,
        phone,
        platform,
        date,
        from_time,
        to_time,
        document,
        description
     }
	
		axios.post("http://localhost:6060/workshop/add",addUser).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Successfully Added!",
			icon: 'success',
			confirmButtonText: "OK",
            confirmButtonColor: "#00B74A",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/workshop";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Workshop Details Unsuccess! Try Again.",
			icon: 'error',
			confirmButtonText: "OK",
            confirmButtonColor: "#F93154",
			type: "success"})
		})
	 }


  return (
    <div>
            <HomePageNav/>
           <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px"}}>Add Workshop Details</h2>
                <div style={{marginLeft:'30%',marginRight:'30%',marginTop:'5%'}}>
                  <div class="mb-3">
                    <label class="form-label">Topic <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="topic" class="form-control"  placeholder="Enter Topic" onChange={(e) =>{
                              settopic(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">organization <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="organization" class="form-control"  placeholder="Enter organization" onChange={(e) =>{
                              setorganization(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Presenter <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="presente" class="form-control"  placeholder="Enter Presenter" onChange={(e) =>{
                              setpresenter(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Qualification </label>
                    <input type="text" class="form-control"  placeholder="Enter Qualifications" onChange={(e) =>{
                              setqualification(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="text" class="form-control"  placeholder="Enter Email" onChange={(e) =>{
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
                    <label class="form-label">Platform <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="platform" class="form-control"  placeholder="Enter Platform" onChange={(e) =>{
                              setplatform(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Date <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="date" class="form-control"  placeholder="Enter Date" onChange={(e) =>{
                              setdate(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">From Date <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="date" class="form-control"  placeholder="Enter From date" onChange={(e) =>{
                              setfrom_time(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">To Date <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="date" class="form-control"  placeholder="Enter To Date" onChange={(e) =>{
                              setto_time(e.target.value);
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