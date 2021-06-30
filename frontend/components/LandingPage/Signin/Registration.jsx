import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import HomePageNav from '../../navbars/homePageNav';

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
	
		axios.post("http://localhost:6060/user/register",addUser).then(() =>{

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
			text: "Ragistration Unsuccess! Try Again.",
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
          <div className="container">
          <div class="row mt-5 mb-5">
              <div class="col-sm-6 pt-5">
              <img src="https://i.imgur.com/hU7mgwt.jpeg" style={{width:'70%'}} class="img-fluid pt-5" alt="Responsive image"/>
              </div>
              <div class="col-sm-6">
              <div className="bg-light p-4">
                        <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px"}}>Registration</h2>
                        <form method="post" >
                        <div >
                          <div>
                            <label className="form-label">User Name <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                            <input type="text" className="form-control"  placeholder="Enter Name" onChange={(e) =>{
                                      setUserName(e.target.value);
                                    }}/>
                          </div>
                          <br/>
                          <div className="mb-3">
                            <label className="form-label">Email <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                            <input type="email" className="form-control"  placeholder="Enter Email"  onChange={(e) =>{
                                      validateEmail(e.target.value);
                                    }}/>
                            <small className={`message ${isValid ? 'success' : 'error'}`} >
                              {message}
                            </small>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Type of the user <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                      setType(e.target.value);
                                    }}>
                            <option value="">User Type</option>
                            <option value="Researcher">Researcher</option>
                            <option value="Wokshop organizer">Wokshop organizer</option>
                            <option value="Attendees">Attendees</option>
                          </select>
                          
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Password <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
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
                          <div className="mb-3">
                            <label className="form-label">NIC Number (Optional)</label>
                            <input type="text" className="form-control"  placeholder="Enter NIC Number" onChange={(e) =>{
                                      setNic(e.target.value);
                                    }}/>
                          </div>
                          <div className="text-right pr-4">
                          <center><button  onClick={sendDate} type="submit" className="btn btn-dark btn-block mb-2" >
                            Submit <i className="fas fa-angle-double-right"></i>
                          </button></center>
                        </div>
                        </div>
                        </form>               
                    </div>
              </div>
            </div>
        </div>
        </div>
        <br></br>
   

     </div>
  );
}