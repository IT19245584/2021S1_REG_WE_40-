import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBNavbarNav,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBModal,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalContent,
    MDBModalBody,
    MDBCardTitle,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
    MDBTabsContent,
    MDBInputGroup, 
    MDBInputGroupText,
    MDBInputGroupElement,
  } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import './nagrokGloableVariable';

function NavBar() {
    const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);
    const [centredModal, setCentredModal] = useState(false);
    const toggleShow = () => setCentredModal(!centredModal);
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value: string) => {
      if (value === basicActive) {
        return;
      }

    setBasicActive(value);
   };

  const [password, setPassword] = useState("");
	const [CPassword, setCPassword] = useState("");
	const [name, setName] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");
	const [nic, setNIC] = useState("");
	const [address, setAddress] = useState("");
	const [district, setDistrict] = useState("");

	const [typePassowrd, setLoginPassword] = useState("");
	const [loginnic, setLoginNIC] = useState("");
  const [type, setType] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  
	const [typeForgotPassowrd, setForgotLoginPassword] = useState("");
  const [typeForgotcPassowrd, setForgotLoginCPassword] = useState("");
	const [Forgonic, setForgotLoginNIC] = useState("");
 
  
	async function sendLoginData(e){
    e.preventDefault();
    let item = {loginnic, typePassowrd};
         let result = await fetch(global.nagrok+"/systemUser/login", {
         method: 'POST',
         headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
         },
         body:JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info",JSON.stringify(result));
     
      const type = JSON.stringify(result.success);
	    console.log(type);

     
     let resultPackage = await fetch(global.nagrok+"/systemUser/addPackage/"+loginnic, {
         method: 'POST',
         headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
         }
      });
      resultPackage = await resultPackage.json();
      localStorage.setItem("user-info",JSON.stringify(resultPackage));
     
      const AdPackage = JSON.stringify(resultPackage.success);
      Cookies.set('AdPackage',AdPackage, { expires: 70000, path: '' });

      

      if( type === '"Buyer"'){
		  Cookies.set('nic',loginnic, { expires: 70000, path: '' });
      Cookies.set('loginstatus','loged', { expires: 70000, path: '' });
		  
            Swal.fire({  
                title: "Success!",
                text: "Login Successed!",
                icon: 'success',
                confirmButtonText: "OK",
                }).then(okay => {
                    if (okay) {
                      window.location.href = "/BuyerDashBoard";
                    }
                  });
      }else if(type === '"Seller"'){
        Cookies.set('nic',loginnic, { expires: 70000, path: '' });
        Cookies.set('loginstatus','loged', { expires: 70000, path: '' });
            Swal.fire({  
                  title: "Success!",
                  text: "Login Successed!",
                  icon: 'success',
                  confirmButtonText: "OK",
            }).then(okay => {
                    if (okay) {
                      window.location.href = "/SellerDashboard";
                    }
                  });
      }else{
        	Swal.fire({  
          title: "Error!",
          text: " Login Unsuccess",
          icon: 'error',
          confirmButtonText: "OK",
          type: "success"}).then(okay => {
                    if (okay) {
                      window.location.href = "/";
                    }
                  });
      }
  }


	function sendDate(e){
    e.preventDefault();
    const newCitizens ={
            name,
            tel,
            email,
            password,
            nic,
            type,
            address,
            district,
                 }
	 if(password === CPassword || password === null || CPassword === null){
		axios.post(global.nagrok+"/systemUser/add",newCitizens).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Ragistration Success!",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Ragistration Unsuccess! Try Again. NIC, Email And Phone Number Must Be Unique",
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


    function sendResetData(e){
     e.preventDefault();
      if(typeForgotPassowrd === typeForgotcPassowrd || typeForgotPassowrd === null || typeForgotcPassowrd === null){
      const updateDetails ={
                  typeForgotPassowrd
          }

	  	axios.put("http://localhost:8078/systemUser/updatePassword/"+Forgonic,updateDetails).then(() =>{
            const id = 0;
            Swal.fire({  
            title: "Success!",
            text: "Password Updating Success",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
              if (okay) {
                window.location.href = "/";
              }
              });
          }).catch((err)=>{

            Swal.fire({  
            title: "Error!",
            text: "Password Updating Not Success",
            icon: 'error',
            confirmButtonText: "OK",
            type: "success"})
          })
      }else{
         Swal.fire({  
            title: "Error!",
            text: "Password Are Not Matching",
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

  const [isValidCFpassword, setIsValidCfpassword] = useState(false);
   const [messageCfpassword, setMessageCfpassword] = useState('');

    const setCFPasswordFnction = (event) => {
    const ConfirmPassword = event;
    if ((ConfirmPassword === typeForgotPassowrd) && (ConfirmPassword !=='') && (ConfirmPassword!== null)) {
      setIsValidCfpassword(true);
      setMessageCfpassword('Password Are Matching');
    } else {
      setIsValidCfpassword(false);
      setMessageCfpassword('Passwords Are Not Match');
    }
    setForgotLoginCPassword(event);
  };


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
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink className="text-light fw-light mt-2" active aria-current='page' href='#'>
                 Get Membership 
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="text-light fw-light mt-2" aria-current='page' href='#'>
                  Advertisment Packages
                </MDBNavbarLink>
                </MDBNavbarItem>
                 <MDBNavbarItem>
                <MDBNavbarLink className="text-light fw-light" aria-current='page' href='#'>
                   <div id="google_translate_element"></div>
                </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
              <form className='d-flex input-group w-auto'>
                <MDBRow>
                    <MDBCol size='5' className='col-example'>
                         <MDBBtn color='warning' onClick={toggleShow}>Sell</MDBBtn> 
                         <MDBModal tabIndex='-1' show={centredModal} getOpenState={(e: any) => setCentredModal(e)}>
                          <MDBModalDialog  size='xl'>
                            <MDBModalContent>
                              <MDBModalBody>
                                 <MDBTabs className='mb-3'>
                                  <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                      Registration
                                    </MDBTabsLink>
                                  </MDBTabsItem>
                                  <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                      Login
                                    </MDBTabsLink>
                                  </MDBTabsItem>
                                   <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                      Forgot Passowrd
                                    </MDBTabsLink>
                                  </MDBTabsItem>
                                </MDBTabs>

                                <MDBTabsContent>
                                  <MDBTabsPane show={basicActive === 'tab1'}>
                                  <div style={{margin:"5% 15% 5% 15%"}}>
                                      <MDBCardTitle className="text-center fs-1 pb-3 text-uppercase  fw-normal" style={{letterspacing:'2px'}}>Registration Page</MDBCardTitle>
                                      <MDBInputGroup noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-user-alt"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='text' placeholder='Full Name' onChange={(e) =>{
                                            setName(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-mobile-alt"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='tel' placeholder='Telephone Number' onChange={(e) =>{
                                            setTel(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-at"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='email' placeholder='Email' onChange={(e) =>{
                                            validateEmail(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                        <small   className={`message ${isValid ? 'success' : 'error'}`} >
                                              {message}
                                        </small>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-key"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='Password' placeholder='Password' onChange={(e) =>{
                                            setPassword(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-key"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='Password' placeholder='Re-Password' onChange={(e) =>{
                                            setCPasswordFnction(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                       <small  className={`messagepassword ${isValidpassword ? 'success' : 'error'}`} >
                                          {messagepassword}
                                        </small>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="far fa-address-card"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='text' placeholder='NIC' onChange={(e) =>{
                                            setNIC(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                      
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-map-marker-alt"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='text' placeholder='Address' onChange={(e) =>{
                                            setAddress(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-map-marked"></i></MDBInputGroupText>
                                          <select class="form-select" aria-label="Default select example" onChange={(e) =>{
                                            setDistrict(e.target.value);
                                          }}>
                                            <option selected>Select District</option>
                                            <option value="Colombo">Colombo</option>
                                            <option value="Gampaha">Gampaha</option>
                                            <option value="Kaluthara">Kaluthara</option>
                                            <option value="Mathara">Mathara</option>
                                            <option value="Galle">Galle</option>
                                            <option value="Hambanthota">Hambanthota</option>
                                            <option value="Kandy">Kandy</option>
                                            <option value="Nuwara Eliya">Nuwara Eliya</option>
                                            <option value="Kagalle">Kagalle</option>
                                            <option value="Anuradapura">Anuradapura</option>
                                            <option value="Polonnaruwa">Polonnaruwa</option>
                                            <option value="Jaffna">Jaffna</option>
                                            <option value="Kilinochchiya">Kilinochchiya</option>
                                            <option value="Vavuniya">Vavuniya</option>
                                            <option value="Mullaitivu">Mullaitivu</option>
                                            <option value="Mannar">Mannar</option>
                                            <option value="Puttalam">Puttalam</option>
                                            <option value="Kurunegala">Kurunegala</option>
                                            <option value="Matale">Matale</option>
                                            <option value="Ratnapura">Ratnapura</option>
                                            <option value="Trincomalee">Trincomalee</option>
                                            <option value="Batticaloa">Batticaloa</option>
                                            <option value="Ampara">Ampara</option>
                                            <option value="Badulla">Badulla</option>
                                            <option value="Monaragala">Monaragala</option>
                                          </select>
                                      </MDBInputGroup>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-male"></i></MDBInputGroupText>
                                          <select class="form-select" aria-label="Default select example" onChange={(e) =>{
                                            setType(e.target.value);
                                          }}>
                                            <option selected>Select Registration Type</option>
                                            <option value="Buyer">Buyer</option>
                                            <option value="Seller">Seller</option>
                                          </select>
                                      </MDBInputGroup>
                                    </div>
                                    <MDBModalFooter>
                                      <MDBBtn color='danger' onClick={toggleShow}>
                                        <i class="fas fa-times"></i> Close
                                      </MDBBtn>
                                      <MDBBtn onClick={sendDate} color="success"><i class="fas fa-save"></i> Submit</MDBBtn>
                                    </MDBModalFooter>
                                  </MDBTabsPane>
                                  <MDBTabsPane show={basicActive === 'tab2'}>
                                   <div style={{margin:"5% 30% 5% 30%"}}>
                                      <MDBCardTitle className="text-center fs-1 pb-3 text-uppercase  fw-normal" style={{letterspacing:'2px'}}>Login Page</MDBCardTitle>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-address-card"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='text' placeholder='NIC' onChange={(e) =>{
                                            setLoginNIC(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-key"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='Password' placeholder='Password' onChange={(e) =>{
                                            setLoginPassword(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                    </div>
                                    <MDBModalFooter>
                                      <MDBBtn color='danger' onClick={toggleShow}>
                                        <i class="fas fa-times"></i> Close
                                      </MDBBtn>
                                      <MDBBtn onClick={sendLoginData} color="success"><i class="fas fa-save"></i> Login</MDBBtn>
                                    </MDBModalFooter>
                                  </MDBTabsPane>
                                    <MDBTabsPane show={basicActive === 'tab3'}>
                                   <div style={{margin:"5% 30% 5% 30%"}}>
                                      <MDBCardTitle className="text-center fs-1 pb-3 text-uppercase  fw-normal" style={{letterspacing:'2px'}}>Fogot Passowrd</MDBCardTitle>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-address-card"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='text' placeholder='NIC' onChange={(e) =>{
                                            setForgotLoginNIC(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                      <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-key"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='Password' placeholder='Password' onChange={(e) =>{
                                            setForgotLoginPassword(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                        <MDBInputGroup className="mt-3" noWrap>
                                        <MDBInputGroupText className="bg-light"><i class="fas fa-key"></i></MDBInputGroupText>
                                        <MDBInputGroupElement type='Password' placeholder='Re-Type Password' onChange={(e) =>{
                                            setCFPasswordFnction(e.target.value);
                                          }}/>
                                      </MDBInputGroup>
                                       <small  className={`messageCfpassword ${isValidCFpassword ? 'success' : 'error'}`} >
                                          {messageCfpassword}
                                        </small>
                                    </div>
                                    <MDBModalFooter>
                                      <MDBBtn color='danger' onClick={toggleShow}>
                                        <i class="fas fa-times"></i> Close
                                      </MDBBtn>
                                      <MDBBtn onClick={sendResetData} color="success"><i class="fas fa-save"></i> Reset</MDBBtn>
                                    </MDBModalFooter>
                                  </MDBTabsPane>
                                </MDBTabsContent>
                              </MDBModalBody>
                            
                            </MDBModalContent>
                          </MDBModalDialog>
                        </MDBModal>
                    </MDBCol>
                    <MDBCol size='5' className='col-example'>
                         <MDBBtn className='text-dark' onClick={toggleShow} color='light'>Buy</MDBBtn> 
                          
                    </MDBCol>
                    <MDBCol size='2' className='col-example'> </MDBCol>
                </MDBRow>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default NavBar;
