import React, { useEffect , useState } from "react";
import { MDBInput, 
         MDBTypography, 
         MDBBtn, 
         MDBRow, 
         MDBCol } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../App.css'

export default function RegistrationOfficer(props){
  
   const [area, setarea] = useState("");
	 const [nic, setNIC] = useState("");
   const [name, setName] = useState("");
	 const [phone, setPhone] = useState("");
	 const [email, setEmail] = useState("");
	 const [address, setAddress] = useState("");
	 const profession = "Officer";
	 const [password, setPassword] = useState("");
	 const [CPassword, setCPassword] = useState("");
	 const [latitude, setLatitude] = useState("");
	 const [longitude, setLongitude] = useState("");

	
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
	    console.log(longitude);
    });

   function reg(e){
     e.preventDefault();
      const officerNew ={
           area,
           nic,
           name,
           phone,
           address,
           latitude,
           longitude,
           profession,
           email,
           password,
     }
	 if(password === CPassword){
		axios.post("http://localhost:5000/officer/OfficerRegistartion",officerNew).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Ragistration Success!",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/Index";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Ragistration Unsuccess.",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
		})
	}else{
		Swal.fire({  
			title: "Error!",
			text: "Passwords Not Matching.",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
	  }
   }
return (
  <div className="home">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{width:'99%'}}>
      <MDBCol></MDBCol>
      <MDBCol style={{marginTop:'10%'}} className="bg-light pt-3 pl-5 pr-5 pb-5 square border border-1 shadow-2">
      
       <MDBTypography variant='h2' className="text-center">Officer Registration</MDBTypography>
      
        <MDBInput label='NIC' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setNIC(e.target.value);
            }}/>
        <MDBInput label='Name' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setName(e.target.value);
            }}/> 
        <MDBInput label='Phone' className="mt-3 bg-white" id='form1' type='tel'  onChange={(e) =>{
              setPhone(e.target.value);
            }}/>
        
        <MDBInput label='Email' className="mt-3 bg-white" id='form1' type='email'  onChange={(e) =>{
              setEmail(e.target.value);
            }}/>
        <MDBInput label='Address' className="mt-3 bg-white" id='form1' type='password'  onChange={(e) =>{
              setAddress(e.target.value);
            }}/>
        <MDBInput label='Password' className="mt-3 bg-white" id='form1' type='password'  onChange={(e) =>{
              setPassword(e.target.value);
            }}/>
        <MDBInput label='Re-Type Passowrd' className="mt-3 bg-white" id='form1' type='password'  onChange={(e) =>{
              setCPassword(e.target.value);
            }}/>
        <select class="form-select" aria-label="Default select example" style={{marginTop:'3%'}} onChange={(e) =>{
              setarea(e.target.value);
            }} >
            <option selected>Select Working Area</option>
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kaluthara">Kaluthara</option>
            <option value="Mathara">Mathara</option>
            <option value="Hambanthota">Hambanthota</option>
        </select>
       <div className="mt-3 d-grid gap-2">
           <MDBBtn type="submit" onClick={reg}>Registration</MDBBtn>
       </div>
    <div className="row text-center text-black-50">
        <div className="col">
           <a href="/RegistrationOfficer"> Officer Registration</a>
        </div>
         <div className="col">
            <a href="/Index"> Login</a>
        </div>
        <div className="col">
            <a href=""> Forgot Password</a>
        </div>
       </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
   </div>
   );
 }