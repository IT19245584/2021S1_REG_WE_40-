import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

function Admin_side_registration() {
    const [password, setPassword] = useState("");
	const [CPassword, setCPassword] = useState("");
    const [email, setEmail] = useState("");
    const [type, settype] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    function reg(e){
    e.preventDefault();
    const admin_side_user ={
             email,
             password,
             type
        }
        if(password === CPassword){
		axios.post("http://localhost:6060/admin_side_user/registrationRequest",admin_side_user).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Ragistration Request Sent!",
			icon: 'success',
			timer: 2000,
            showConfirmButton: false,
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/Admin_Side_Wait";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Ragistration Request Not Sent",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
		})
	}else{
		Swal.fire({  
			title: "Error!",
			text: "Passwords Not Matching",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
	  }
    }
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
   const [isValidpassword, setIsValidpassword] = useState(false);
   const [messagepassword, setMessagepassword] = useState('');

    const setCPasswordFnction = (event) => {
    const ConfirmPassword = event;
    if ((ConfirmPassword === password) && (ConfirmPassword !=='') && (ConfirmPassword!== null)) {
      setIsValidpassword(true);
      setMessagepassword('Password Are Matching');
    } else {
      setIsValidpassword(false);
      setMessagepassword('Passwords Are Not Match');
    }
    setCPassword(event);
  };
  return (
      <div className="hero-image">
         <div className="container ">
            <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
                <div className="col-4 p-3 bg-light">
                    <h3 className="text-center text-uppercase text-decoration-underline d-letter-spacing">Sign Up</h3>
                    <div className="mb-3 mt-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control"  placeholder="" onChange={(e) =>{
						     validateEmail(e.target.value);
						}}/>
                        <small   className={`message ${isValid ? 'success' : 'error'}`} >
                             {message}
                        </small>
                    </div>
                    <div className="mb-3 mt-3">
                            <label for="exampleFormControlInput1" className="form-label">Passowrd</label>
                            <input type="email" className="form-control"  placeholder="" onChange={(e) =>{
						     setPassword(e.target.value);
						}}/>
                    </div>
                     <div className="mb-3 mt-3">
                            <label for="exampleFormControlInput1" className="form-label">Re-Passowrd</label>
                            <input type="email" className="form-control"  placeholder="" onChange={(e) =>{
						     setCPasswordFnction(e.target.value);
						}}/>
                         <small  className={`messagepassword ${isValidpassword ? 'success' : 'error'}`} >
                            {messagepassword}
                         </small>
                       </div>
                       <div className="mb-3 mt-3">
                        <label for="exampleFormControlInput1" className="form-label">User Type</label>
                        <select class="form-select" aria-label="Default select example" onChange={(e) =>{
						     settype(e.target.value);
						}}>
                                <option selected>&nbsp;</option>
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="Reviewer">Reviewer</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-dark btn-sm" onClick={reg} type="button">Register</button>
                    </div>
                    <div className="text-end">
                        <a className="text-decoration-none text-black-50 " href="Admin_side_login">
                            <small>Login</small>
                        </a>
                    </div>
                </div>
            </div>
         </div>
      </div>
   );
}
export default Admin_side_registration;