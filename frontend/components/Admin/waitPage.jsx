import React from "react";

function Admin_Side_Wait() {
  return (
      <div >
         <div className="container text-center">
            <div className="row justify-content-center align-items-center" style={{marginTop:'15%'}} >
               <img style={{width:'40%'}} src="https://www.jacada.com/wp-content/uploads/2020/05/dontclickandpray.svg"/>
               <h1 style={{lineHeight:'0%'}} className="text-center text-danger d-letter-spacing text-uppercase pt-5">Checking Your information</h1>
              <a href="Admin_side_login" className="mt-4 text-decoration-none tect-dark"> <h5 className="text-dark text-uppercase d-letter-spacing">Back To Login Page <i class="bi bi-arrow-right-square-fill"></i></h5></a>
            </div>
         </div>
      </div>
   );
}
export default Admin_Side_Wait;