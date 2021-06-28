import React, {useState} from 'react';
import Footer from '../../footer/footer';
import HomePageNav from '../../navbars/homePageNav';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
//import './url';

export default function Login() {
    const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

    async function sendLoginDate(e){
         e.preventDefault();
		     let item = {email, password};
         let result = await fetch(global.url+"/user/login", {
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
		  Cookies.set('email',email, { expires: 70000, path: '' });
      Cookies.set('loginstatus','loged', { expires: 70000, path: '' });
		  
		  if(profesion === '"Carpenter"'){
            Swal.fire({  
                title: "Success!",
                text: "Login Successed!",
                confirmButtonColor: "#00B74A",
                icon: 'success',
                confirmButtonText: "OK",
                }).then(okay => {
                    if (okay) {
                      window.location.href = "/SellerDashboard";
                    }
                  });
		  }else{
            Swal.fire({  
                title: "Success!",
                text: "Login Successed!",
                confirmButtonColor: "#00B74A",
                icon: 'success',
                confirmButtonText: "OK",
                })
		  }
         
      }else{
            Swal.fire({  
                  title: "Error!",
                  text: "Please Ckeck You Entered Email Or Password!",
                  icon: 'error',
                  confirmButtonText: "OK",
                  confirmButtonColor: "#F93154",
            });
      }
  }
  return (
      <div>
            <HomePageNav/>
           <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px"}}>Login</h2>
                <div style={{marginLeft:'30%',marginRight:'30%',marginTop:'5%'}}>
                  <div class="mb-3">
                    <label class="form-label">Email <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="email" class="form-control"  placeholder="Enter Email" onChange={(e) =>{
                              setEmail(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="password" class="form-control"  placeholder="Enter Password" onChange={(e) =>{
                              setPassword(e.target.value);
                            }}/>
                  </div>
                </div>
                <div className="text-end pr-4">
                  <a href="carpenterReset" className="pb-1">
                        <span className="text-muted">Reset Password &nbsp;&nbsp;</span>
                  </a>
                </div>
        <Footer/>
     </div>
  );
}