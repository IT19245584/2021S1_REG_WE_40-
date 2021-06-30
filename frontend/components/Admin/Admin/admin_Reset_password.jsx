import React,{useState , useEffect} from "react";
import Footer from './admin_dashaboard Footer.jsx';
import Nav from './admin_dashboard Nav.jsx';
import SlideNav from './admin_dashboard SlideNav.jsx';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function Admin_Reset(){
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
        text: "Password Resetting Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
            window.location.href = "/Admin_dashboard_user";
        }
        });

        
    }).catch((err)=>{

        Swal.fire({  
        title: "Error!",
        text: "Passwaord Resetting Not Saved",
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
     <div class="sb-nav-fixed">
        <Nav/>
        <div id="layoutSidenav">
            <SlideNav/>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4 mt-5">
                      <div class="container" style={{marginTop:'10%'}}>
                        <div class="row justify-content-center align-items-center" style={{height:'20vh'}}>
                          <div className="col-6 p-3 bg-light">
                               <h3 className="text-center text-uppercase text-decoration-underline d-letter-spacing">Reset Password</h3>
                                 <div className="mb-3 mt-3">
                                                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                                  <input type="email" className="form-control"  placeholder="" onChange={(e) =>{
                                      setEmail(e.target.value);
                                  }}/>
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
                    <div className="d-grid gap-2">
                        <button className="btn btn-dark btn-sm" onClick={reset} type="button">Add</button>
                    </div>
                    <div className="text-end">
                        <a className="text-decoration-none text-black-50 " href="Admin_dashboard_user">
                            <small>Back</small>
                        </a>
                    </div>
                </div>
                        </div>
                    </div>
                    </div>
                </main>
               <Footer/>
            </div>
        </div>
        </div>
   )
}