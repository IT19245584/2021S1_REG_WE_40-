import React ,{useState , useEffect} from "react";
import BeforeNav from "./beforNavSeller";
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';

import './nagrokGloableVariable';

import {
    
    MDBContainer,
    MDBBtn,
    MDBCardTitle,
    MDBInputGroup, 
    MDBInputGroupText,
    MDBInputGroupElement,
  } from 'mdb-react-ui-kit';

export default function EditProfilebuye(){
      const nic = Cookies.get('nic');
      var profileUpdate = reactLocalStorage.getObject('profileUpdates');

      const [name, setName] = useState(profileUpdate[0]);
      const [tel, setTel] = useState(profileUpdate[1]);
      const [email, setEmail] = useState(profileUpdate[2]);
      const [address, setAddress] = useState(profileUpdate[3]);
      const [district, setDistrict] = useState(profileUpdate[4]);

      function setUpdate(e){
            e.preventDefault();
            const editProfile ={
                    name,
                    tel,
                    address,
                    district,
                    email,
            }

	  	axios.put("http://localhost:8078/systemUser/updateUserProfile/"+nic,editProfile).then(() =>{
              
              Swal.fire({  
              title: "Success!",
              text: "Profile Updating Success!",
              icon: 'success',
              confirmButtonText: "OK",
              type: "success"}).then(okay => {
                if (okay) {
                  window.location.href = "/SellerDashboard";
                }
                });

              
            }).catch((err)=>{

              Swal.fire({  
              title: "Error!",
              text: "Profile Updating Not Saved",
              icon: 'error',
              confirmButtonText: "OK",
              type: "success"})
            })
       }
	return (
    <div>
    <BeforeNav/>
     <div>
      <MDBContainer className="mt-5" style={{paddingTop:'3%', paddingBottom : '10%'}}>
     <div style={{margin:"5% 15% 5% 15%"}}>
              <MDBCardTitle className="text-center fs-1 pb-3 text-uppercase  fw-normal" style={{letterspacing:'2px'}}>Edit Profile</MDBCardTitle>
              <MDBInputGroup noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-user-alt"></i></MDBInputGroupText>
                <MDBInputGroupElement type='text' value={name} placeholder='Full Name' onChange={(e) =>{
                    setName(e.target.value);
                  }}/>
              </MDBInputGroup>
              <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-mobile-alt"></i></MDBInputGroupText>
                <MDBInputGroupElement type='tel' value={tel}  placeholder='Telephone Number' onChange={(e) =>{
                    setTel(e.target.value);
                  }}/>
              </MDBInputGroup>
              <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-at"></i></MDBInputGroupText>
                <MDBInputGroupElement type='email' value={email}  placeholder='Email' onChange={(e) =>{
                    setEmail(e.target.value);
                  }}/>
              </MDBInputGroup>
              <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-map-marker-alt"></i></MDBInputGroupText>
                <MDBInputGroupElement type='text' value={address}  placeholder='Address' onChange={(e) =>{
                    setAddress(e.target.value);
                  }}/>
              </MDBInputGroup>
              <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-map-marked"></i></MDBInputGroupText>
                  <select class="form-select" aria-label="Default select example" onChange={(e) =>{
                    setDistrict(e.target.value);
                  }}>
                    <option value={district}>Selected - {district}</option>
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
              <div className="text-end">
                   <MDBBtn className="mt-3 bg-success" type="submit" onClick={setUpdate}>Update <i className="fas fa-save"></i></MDBBtn>
              </div>
            </div>
    </MDBContainer>
     </div>
    </div>
	)
}


