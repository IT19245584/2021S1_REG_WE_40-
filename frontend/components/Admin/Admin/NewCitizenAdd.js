import React, { useEffect , useState } from "react";
import { MDBInput, 
         MDBTypography, 
         MDBBtn, 
         MDBRow, 
         MDBCol } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';
import Navbr from './NavBarOfficer';
import '../App.css'

export default function RegCitizen(props){
  
   const [district, setDistrict] = useState("");
	 const [nic, setNIC] = useState("");
   console.log(nic)
   const [name, setName] = useState("");
	 const [tel, setPhone] = useState("");
	 const [age, setAge] = useState("");
	 const [bday, setbday] = useState("");
	 const [address, setAddress] = useState("");
	 const profession = "Citizen";
	 const [password, setPassword] = useState("");
	 const [CPassword, setCPassword] = useState("");
	 const [healthStatus, setStatus] = useState("");
	 const [latitude, setLatitude] = useState("");
	 const [longitude, setLongitude] = useState("");

	
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
	    console.log(longitude);
    });

   function reg(e){
     e.preventDefault();
      const newCitizensReg ={
            name,
            tel,
            password,
            bday,
            age,
            nic,
            address,
            latitude,
            longitude,
            healthStatus,
            profession,
            district
     }
	 if(password === CPassword){
		axios.post("http://localhost:5000/citizen/add",newCitizensReg).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Ragistration Success!",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/CitizenList";
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
  <div className="hometwo">
    <Navbr/>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4 mb-5' style={{width:'99%'}}>
      <MDBCol></MDBCol>
      <MDBCol style={{marginTop:'10%'}} className="bg-light pt-3 pl-5 pr-5 pb-5 square border border-1 shadow-2">
      
       <MDBTypography variant='h2' className="text-center">Citizen Registration</MDBTypography>
      
        <MDBInput label='NIC' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setNIC(e.target.value);
            }}/>
        <MDBInput label='Name' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setName(e.target.value);
            }}/> 
        <MDBInput label='Phone' className="mt-3 bg-white" id='form1' type='tel'  onChange={(e) =>{
              setPhone(e.target.value);
            }}/>
        <MDBInput label='Age' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setAge(e.target.value);
            }}/>
        <MDBInput label='Bday' className="mt-3 bg-white" id='form1' type='date'  onChange={(e) =>{
              setbday(e.target.value);
            }}/>
        <MDBInput label='Address' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setAddress(e.target.value);
            }}/>
        <MDBInput label='Password' className="mt-3 bg-white" id='form1' type='password'  onChange={(e) =>{
              setPassword(e.target.value);
            }}/>
        <MDBInput label='Re-Type Passowrd' className="mt-3 bg-white" id='form1' type='password'  onChange={(e) =>{
              setCPassword(e.target.value);
            }}/>
        <select class="form-select" aria-label="Default select example" style={{marginTop:'3%'}} onChange={(e) =>{
              setStatus(e.target.value);
            }} >
            <option selected>Select Health Status</option>
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
            <option value="Discharge">Discharge</option>
        </select>
         <select class="form-select" aria-label="Default select example" style={{marginTop:'3%'}} onChange={(e) =>{
              setDistrict(e.target.value);
            }} >
            <option selected>Select District</option>
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kaluthara">Kaluthara</option>
            <option value="Mathara">Mathara</option>
            <option value="Hambanthota">Hambanthota</option>
        </select>
       <div className="mt-3 d-grid gap-2">
           <MDBBtn type="submit" onClick={reg}>Registration</MDBBtn>
       </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
   </div>
   );
 }
