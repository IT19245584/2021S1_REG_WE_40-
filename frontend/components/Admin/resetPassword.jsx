import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

function Admin_Side_Login() {
     const [password, setPassword] = useState("");
     const [CPassword, setCPassword] = useState("");
     const [email, setEmail] = useState("");

   function reset(e){ 
       e.preventDefault();
       const editProfile ={
                password}
        axios.put("http://localhost:6060/admin_side_user/updatePassword/"+email,editProfile).then(() =>{

        Swal.fire({  
        title: "Success!",
        text: "Password Updating Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
            window.location.href = "/Admin_side_login";
        }
        });

        
    }).catch((err)=>{

        Swal.fire({  
        title: "Error!",
        text: "Passwaord Updating Not Saved",
        icon: 'error',
        confirmButtonText: "OK",
        type: "success"})
    })
     }
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
                    <h3 className="text-center text-uppercase text-decoration-underline d-letter-spacing">Reset Password</h3>
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
                     <div className="mb-3 mt-3">
                            <label for="exampleFormControlInput1" className="form-label">Re-Passowrd</label>
                            <input type="password" className="form-control"  placeholder="" onChange={(e) =>{
						     setCPasswordFnction(e.target.value);
						}}/>
                         <small  className={`messagepassword ${isValidpassword ? 'success' : 'error'}`} >
                            {messagepassword}
                         </small>
                       </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-dark btn-sm" onClick={reset} type="button">Reset Password</button>
                    </div>
                    <div className="text-end">
                        <a className="text-decoration-none text-black-50 " href="Admin_side_login">
                            <small>Sign In</small>
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