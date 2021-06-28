import React, { useState , useEffect } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import './nagrokGloableVariable';

function NavBar() {
    const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);
    function logOut(e){
      e.preventDefault();
      Cookies.remove('nic');
      Cookies.set('loginstatus','logout', { expires: 70000, path: '' });
      Swal.fire({  
                title: "Success!",
                text: "Logout Successed!",
                icon: 'success',
                confirmButtonText: "OK",
                }).then(okay => {
                    if (okay) {
                      window.location.href = "/";
                    }
                  });
    }

    const loginStatus = Cookies.get('loginstatus');
   useEffect(() => {
    if(loginStatus === null || loginStatus === '' || loginStatus === 'logout'){
      	Swal.fire({  
          title: "Error!",
          text: " First Of All You Must Login",
          icon: 'error',
          confirmButtonText: "OK",
          type: "success"}).then(okay => {
                    if (okay) {
                      window.location.href = "/";
                    }
                  });
    }
     },[]);

  return (
    <div>
      
     <MDBNavbar expand='lg' className="fixed-top"  style={{backgroundColor:'#004D40'}}>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='#'><span className="text-warning"><strong><i class="fas fa-home h3"></i> PROPERTY</strong></span><span className="text-white text-italic"><small>-Whizz</small></span></MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <form className='d-flex input-group w-auto'>
                <MDBRow>
                    <MDBCol size='5' className='col-example'>
                       <a href="/BuyerDashBoard">  <MDBBtn style={{backgroundColor:"transparent", border:'none'}} className="shadow-0" ><MDBIcon  icon='tachometer-alt' size='2x' /> <span className="fw-light">Dashboard</span></MDBBtn> </a>
                    </MDBCol>
                    <MDBCol size='5' className='col-example'>
                       <MDBBtn style={{backgroundColor:"transparent", border:'none'}} onClick={logOut} className="shadow-0" ><MDBIcon  icon='sign-out-alt' size='2x' /> <span className="fw-light">LogOut</span></MDBBtn> 
                       
                    </MDBCol>
                    <MDBCol size='2' className='col-example'>   
                  
                    </MDBCol>
                </MDBRow>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default NavBar;
