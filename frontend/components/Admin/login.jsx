import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

function Admin_Side_Login() {
     const [password, setPassword] = useState("");
     const [email, setEmail] = useState("");

    async function login(e){ 
     e.preventDefault();
      let item = {email, password};
         let result = await fetch("http://localhost:6060/admin_side_user/login", {
         method: 'POST',
         headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
         },
         body:JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info",JSON.stringify(result));
     
      const type = JSON.stringify(result.success);
	  
      if( JSON.stringify(result.success) !== 'false'){
		  Cookies.set('email',email, { expires: 70000, path: '' });

            if(type === '"Admin"'){
                Swal.fire({  
                    title: "Success!",
                    text: "Login Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    }).then(okay => {
                        if (okay) {
                        window.location.href = "/Admin_dashbord";
                        }
                    });
            }else if(type === '"Editor"'){
                Swal.fire({  
                    title: "Success!",
                    text: "Login Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    }).then(okay => {
                        if (okay) {
                        window.location.href = "/phioffficerPanel";
                        }
                    });
            }else{
                 Swal.fire({  
                    title: "Success!",
                    text: "Login Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    }).then(okay => {
                        if (okay) {
                        window.location.href = "/phioffficerPanel";
                        }
                    });
            }
            
        }else{
                Swal.fire({  
                    title: "Error!",
                    text: "Please Ckeck You Entered Email Or Password!",
                    icon: 'error',
                    confirmButtonText: "OK",
                });
        }
      
     }
  return (
      <div className="hero-image">
         <div className="container ">
            <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
                <div className="col-4 p-3 bg-light">
                    <h3 className="text-center text-uppercase text-decoration-underline d-letter-spacing">Sign In</h3>
                    <div className="mb-3 mt-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control"  placeholder="" onChange={(e) =>{
						     setEmail(e.target.value);
						}}/>
                    </div>
                    <div className="mb-3 mt-3">
                            <label for="exampleFormControlInput1" className="form-label">Passowrd</label>
                            <input type="password" className="form-control"  placeholder="" onChange={(e) =>{
						     setPassword(e.target.value);
						}}/>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-dark btn-sm" onClick={login} type="button">Login</button>
                    </div>
                    <div className="text-end">
                        <a className="text-decoration-none text-black-50 " href="Admin_side_pass_rest">
                            <small>Reset Password</small>
                        </a>{''}&nbsp;&nbsp;&nbsp;
                          <a className="text-decoration-none text-black-50 " href="Admin_side_registration">
                            <small>Registration</small>
                        </a>
                    </div>
                </div>
            </div>
         </div>
      </div>
   );
}
export default Admin_Side_Login;