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
import '../App.css'

export default function RegOfficer(props){
   	const [loginTel, setTel] = useState("");
   	const [type, setType] = useState("");
   	const [loginPassword, setPassword] = useState("");

    async function login(e){   
        if(type === 'Officer'){
                e.preventDefault();
                let item = {loginPassword, loginTel};
                    let result = await fetch("http://localhost:5000/officer/login", {
                    method: 'POST',
                    headers:{
                        "Content-Type" : "application/json",
                        "Accept" : "application/json"
                    },
                    body:JSON.stringify(item)
                });
                result = await result.json();
                localStorage.setItem("user-info",JSON.stringify(result));
                
                const profesion = JSON.stringify(result.success);
                console.log(profesion);

                if( JSON.stringify(result.success) !== 'false'){
                    Cookies.set('tel',loginTel, { expires: 30000, path: '' });
                    Cookies.set('status','loged', { expires: 3000, path: '' });
                    Swal.fire({  
                            title: "Success!",
                            text: "Login Successed!",
                            icon: 'success',
                            confirmButtonText: "OK",
                            }).then(okay => {
                                if (okay) {
                               		window.location.href = "/officerProfile";

                                }
                            });
                    
                }else{
                        Swal.fire({  
                            title: "Error!",
                            text: "Please Ckeck You Entered NIC Or Password!",
                            icon: 'error',
                            confirmButtonText: "OK",
                        });
                }
        }else if(type === 'Citizen'){
           e.preventDefault();
                let item = {loginPassword, loginTel};
                    let result = await fetch("http://localhost:5000/citizen/login", {
                    method: 'POST',
                    headers:{
                        "Content-Type" : "application/json",
                        "Accept" : "application/json"
                    },
                    body:JSON.stringify(item)
                });
                result = await result.json();
                localStorage.setItem("user-info",JSON.stringify(result));
                
                const profesion = JSON.stringify(result.success);
                console.log(profesion);

                if( JSON.stringify(result.success) !== 'false'){
                    Cookies.set('tel',loginTel, { expires: 30000, path: '' });
                    Cookies.set('status','loged', { expires: 3000, path: '' });
                    Swal.fire({  
                            title: "Success!",
                            text: "Login Successed!",
                            icon: 'success',
                            confirmButtonText: "OK",
                            }).then(okay => {
                                if (okay) {
                               		window.location.href = "/Index";
                                }
                            });
                    
                }else{
                        Swal.fire({  
                            title: "Error!",
                            text: "Please Ckeck You Entered NIC Or Password!",
                            icon: 'error',
                            confirmButtonText: "OK",
                        });
                }
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
       <MDBTypography variant='h2' className="text-center">Login Page</MDBTypography>
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
       <div className="mt-3 d-grid gap-2">
         <MDBBtn type="submit" onClick={login}>Login</MDBBtn>
       </div>
       <div className="row text-center text-black-50">
        <div className="col">
           <a href="/RegistrationOfficer"> Officer Registration</a>
        </div>
         <div className="col">
            <a href="/RegistrationCitizen"> Citizen Registration</a>
        </div>
        <div className="col">
            <a href="PasswordReset"> Forgot Password</a>
        </div>
       </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
   </div>
   );
 }
