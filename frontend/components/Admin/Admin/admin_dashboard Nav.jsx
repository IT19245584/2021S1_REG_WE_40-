import React,{useState , useEffect} from "react";
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Swal from 'sweetalert2';

export default function Admin_dashaboard_Nav(){
    function LOGOUT(){
        Cookies.remove('email');
        reactLocalStorage.clear();
        Swal.fire({  
			title: "Success!",
			text: "Logout Success",
			icon: 'success',
			timer: 2000,
            showConfirmButton: false,
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/";
				}
				});


    }
return (
   
        <div>
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            
                <a className="navbar-brand ps-3 text-warning" style={{fontSize:'23px'}} href="Admin_dashbord">AFGlobal2021</a>
                
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </form>
        
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <span className="text-white" style={{cursor:'pointer'}} onClick={LOGOUT}><i class="bi bi-door-closed-fill"></i></span>&nbsp;&nbsp;&nbsp;
                    <span className="text-white" style={{cursor:'pointer'}}><i class="bi bi-person-circle"></i></span>&nbsp;&nbsp;&nbsp;
                </ul>
            </nav>
            </div>
   )
}