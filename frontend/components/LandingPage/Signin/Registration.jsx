import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import HomePageNav from '../../navbars/homePageNav';
import Footer from '../../footer/footer';
import ContactUs from '../ContactUs/ContactBody';

export default function Registration() {
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [nic, setNic] = useState("");
   const [type, setType] = useState("");

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
           username,
           password,
           email,
           nic,
           type,
     }
	
		axios.post(global.url+"/user/addUser",addUser).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Ragistration Success!",
			icon: 'success',
			confirmButtonText: "OK",
            confirmButtonColor: "#00B74A",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Ragistration Unsuccess! Try Again.  Email And Phone Number Must Be Unique",
			icon: 'error',
			confirmButtonText: "OK",
            confirmButtonColor: "#F93154",
			type: "success"})
		})
	 }


  return (
    <div>
          <HomePageNav/>
          <div>
          <div className="row row-cols-md-3 ">
            <div className="col">
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px"}}>Registrtion</h2>
            <form method="post" >
            <div >
              <div class="mb-3">
                <label class="form-label">User Name <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                <input type="text" class="form-control"  placeholder="Enter Name" onChange={(e) =>{
                          setUserName(e.target.value);
                        }}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Email <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                <input type="email" class="form-control"  placeholder="Enter Email"  onChange={(e) =>{
                          validateEmail(e.target.value);
                        }}/>
                <small className={`message ${isValid ? 'success' : 'error'}`} >
                  {message}
                </small>
              </div>
              <div class="mb-3">
                <label class="form-label">Type of the user <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                <input type="tel" maxlength={14}  class="form-control"  placeholder="Type of user" onChange={(e) =>{
                          setType(e.target.value);
                        }}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Password <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                <input type="password" class="form-control"  placeholder="Enter Password" onChange={(e) =>{
                          setPassword(e.target.value);
                        }}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Confirm Password <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                <input type="password" class="form-control"  placeholder="Enter Confirm Password" onChange={(e) =>{
                          setConfirmPassword(e.target.value);
                        }}/>
                 <small className={`messagepassword ${isValidpassword ? 'success' : 'error'}`} >
                  {messagepassword}
                </small>
              </div>
              <div class="mb-3">
                <label class="form-label">NIC Number (Optional)</label>
                <input type="text" class="form-control"  placeholder="Enter NIC Number" onChange={(e) =>{
                          setNic(e.target.value);
                        }}/>
              </div>
              <div className="text-end pr-4">
              <center><button  onClick={sendDate} type="submit" className="btn btn-primary btn-block mb-2" >
                Submit <i class="fas fa-angle-double-right"></i>
              </button></center>
            </div>
            </div>
            </form>
           
        </div>
        </div>
        </div>
        <ContactUs />
        <Footer/>

     </div>
  );
}