import React, { useState , useEffect } from "react";
import { MDBInput, 
         MDBCardImage, 
         MDBTypography, 
         MDBCardTitle, 
         MDBBtn, 
         MDBRow, 
         MDBCol } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../App.css'

export default function ResetPassword(props){
   	const [tel, setTel] = useState("");
   	const [type, setType] = useState("");
   	const [loginPassword, setPassword] = useState("");
   	const [passowrd, setCPassword] = useState("");

    function reset(e){ 
    
           
        if(type === 'Officer'){
                e.preventDefault();
                const editProfile ={
                passowrd}

                axios.put("http://localhost:5000/officer/resetPassword/"+tel,editProfile).then(() =>{

                  Swal.fire({  
                  title: "Success!",
                  text: "Profile Updating Success!",
                  icon: 'success',
                  confirmButtonText: "OK",
                  type: "success"}).then(okay => {
                    if (okay) {
                      window.location.href = "/index";
                    }
                    });

                  
                }).catch((err)=>{

                  Swal.fire({  
                  title: "Error!",
                  text: "Profile Updating Not Saved",
                  icon: 'error',
                  confirmButtonText: "OK",
                  type: "success"})
                })
        }else if(type === 'Citizen'){
           e.preventDefault();
                const editProfile ={
                passowrd}

                axios.put("http://localhost:5000/citizen/resetPassword/"+tel,editProfile).then(() =>{

                  Swal.fire({  
                  title: "Success!",
                  text: "Profile Updating Success!",
                  icon: 'success',
                  confirmButtonText: "OK",
                  type: "success"}).then(okay => {
                    if (okay) {
                      window.location.href = "/index";
                    }
                    });

                  
                }).catch((err)=>{

                  Swal.fire({  
                  title: "Error!",
                  text: "Profile Updating Not Saved",
                  icon: 'error',
                  confirmButtonText: "OK",
                  type: "success"})
                })

        }else{
             Swal.fire({  
                            title: "Error!",
                            text: "Invalid User",
                            icon: 'error',
                            confirmButtonText: "OK",
                        });
        }
   
    
}
return (
  <div className="home">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{width:'99%'}}>
      <MDBCol></MDBCol>
      <MDBCol style={{marginTop:'10%'}} className="bg-light pt-3 pl-5 pr-5 pb-5 square border border-1 shadow-2">
       <MDBTypography variant='h2' className="text-center">Reset Password</MDBTypography>
       <select class="form-select" aria-label="Default select example" onChange={(e) =>{
              setType(e.target.value);
            }} >
            <option selected>Select Login Type</option>
            <option value="Officer">Officer</option>
            <option value="Citizen">Citizen</option>
        </select>
       <MDBInput label='Telephone Number' className="mt-3 bg-white" id='form1' type='text' onChange={(e) =>{
              setTel(e.target.value);
            }}  />
       <MDBInput label='Password' className="mt-3 bg-white" id='form1' type='password' onChange={(e) =>{
              setPassword(e.target.value);
            }} />
       <MDBInput label='Confirm Password' className="mt-3 bg-white" id='form1' type='password' onChange={(e) =>{
              setCPassword(e.target.value);
            }} />
       <div className="mt-3 d-grid gap-2">
         <MDBBtn type="submit" onClick={reset}>Reset</MDBBtn>
       </div>
       <div className="row text-center text-black-50">
        <div className="col">
           <a href="/RegistrationOfficer"> Officer Registration</a>
        </div>
         <div className="col">
            <a href="/RegistrationCitizen"> Citizen Registration</a>
        </div>
        <div className="col">
            <a href="/Index"> Login</a>
        </div>
       </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
   </div>
   );
 }
