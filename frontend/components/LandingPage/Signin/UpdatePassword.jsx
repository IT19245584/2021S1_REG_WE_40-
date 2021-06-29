import React, {useState} from 'react';
import Footer from '../../footer/footer';
import HomePageNav from '../../navbars/homePageNav';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
//import './url';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
 
    const [Required, setRequired] = useState('*Required');
 
    const [isValidpassword, setIsValidpassword] = useState(false);
    const [messagepassword, setMessagepassword] = useState('');
 
      const setConfirmPassword = (event) => {
     const ConfirmPassword = event;
     if (ConfirmPassword === password) {
       setIsValidpassword(true);
       setMessagepassword('Password Are Matching');
     } else {
       setIsValidpassword(false);
       setMessagepassword('Passwords Are Not Match');
     }
   };

    async function sendDate(e){
        e.preventDefault();

        let item = {email, password};
        let result = await fetch("http://localhost:6060/updatePassword/:email", {
        method: 'POST',
        headers:{
           "Content-Type" : "application/json",
           "Accept" : "application/json"
        },
        body:JSON.stringify(item)
     });
     result = await result.json();
     localStorage.setItem("user-info",JSON.stringify(result));
    
     const type = JSON.stringify(result.message);
     if( JSON.stringify(result.success) !== 'false'){
      Cookies.set('email',email, { expires: 70000, path: '' });
      Swal.fire({  
        title: "Success!",
        text: "Reset Password Success!",
        icon: 'success',
        confirmButtonText: "OK",
        confirmButtonColor: "#00B74A",
        type: "success"}).then(okay => {
            if (okay) {
                window.location.href = "/";
            }
            });
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
      <div>
            <HomePageNav/>
            <div className="container">
          <div class="row mt-5 mb-5">
              <div class="col-sm-6 pt-5">
              <img src="https://i.imgur.com/hU7mgwt.jpeg" style={{width:'70%'}} class="img-fluid pt-5" alt="Responsive image"/>
              </div>
              <div class="col-sm-6 p-3 bg-light">
              <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px" }}>Reset Pasword</h2>
              <div >
              <div class="mb-3">
                    <label class="form-label">Email <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="email" class="form-control"  placeholder="Enter Email" onChange={(e) =>{
                              setEmail(e.target.value);
                            }}/>
                  </div>
              <div className="mb-3">
                            <label className="form-label">New Password <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                            <input type="password" className="form-control"  placeholder="Enter Password" onChange={(e) =>{
                                      setPassword(e.target.value);
                                    }}/>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Confirm Password <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                            <input type="password" className="form-control"  placeholder="Enter Confirm Password" onChange={(e) =>{
                                      setConfirmPassword(e.target.value);
                                    }}/>
                            <small className={`messagepassword ${isValidpassword ? 'success' : 'error'}`} >
                              {messagepassword}
                            </small>
                          </div>
                </div>
                       
                <div className="text-end pr-4">
              <center><button  onClick={sendDate} type="submit" className="btn btn-primary btn-block mb-2" >
                Submit <i className="fas fa-angle-double-right"></i>
              </button></center>
            </div>
              </div>
          </div>
          </div>
      
     </div>
  );
}