import React ,{useState , useEffect} from "react";
import BeforeNav from "./beforNavSeller";
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import './nagrokGloableVariable';

import {
    
    MDBContainer,
    MDBBtn,
    MDBCardTitle,
    MDBInputGroup, 
    MDBInputGroupText,
    MDBInputGroupElement,
  } from 'mdb-react-ui-kit';

export default function AdvertismentPackage(){
        const nic = Cookies.get('nic');

        const [advertismentPackage, setAdvertismentPackage] = useState("");
        function sendDate(e){
         e.preventDefault();

    const newAdvertismentPackage ={
           advertismentPackage,
           nic
     }

    if(advertismentPackage !== "null"){
		axios.post(global.nagrok+"/advertising/addAdvertismentPackage",newAdvertismentPackage).then(() =>{

      Cookies.set('AdPackage','true', { expires: 70000, path: '' });

    
      Swal.fire({  
			title: "Success!",
			text: "Successfully Buy Advertisement Package",
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
			text: "Advertisement Package Buying Not Success",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
		})
     }else{
       Swal.fire({  
			title: "Error!",
			text: "Please Select A Package",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
     }
	 }
	return (
    <div>
    <BeforeNav/>
     <div>
      <MDBContainer className="mt-5" style={{paddingTop:'6%', paddingBottom : '10%'}}>
      <MDBCardTitle className="fs-2 text-uppercase fw-normal text-center pb-3">Buy Advertisements Package</MDBCardTitle>
      <div className="container">
            <div className="bg-light rounded shadow-2" style={{padding:"2% 5% 5% 5%" , margin:'0% 15% 0% 15%'}}>
                <div className="text-end mb-3">
                      <a href="/SellerDashboard"> <MDBBtn color="black" size='sm'>Profile</MDBBtn></a>
                </div>
                <MDBInputGroup noWrap>
                  <MDBInputGroupText className="bg-light"><i className="fas fa-id-card"></i></MDBInputGroupText>
                  <MDBInputGroupElement type='text' placeholder='Price Per Month'value={nic} disabled/>
                </MDBInputGroup>
                <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i className="fas fa-cube"></i></MDBInputGroupText>
                    <select class="form-select" aria-label="Default select example" onChange={(e) =>{
                    setAdvertismentPackage(e.target.value);
                    }}>
                    <option value="null" selected>Select Advertisement </option>
                    <option value="5000">Rs. 5000 Package</option>
                    <option value="30000">Rs. 30000 Package</option>
                    <option value="40000">Rs. 40000 Package</option>
                    <option value="50000">Rs. 50000 Package</option>
                    </select>
                </MDBInputGroup>
                 <div class="d-grid gap-2 mt-4">
                     <MDBBtn type="submit" onClick={sendDate}>Submit <i class="fas fa-save"></i></MDBBtn>
                 </div>
            </div>
      </div>
    </MDBContainer>
     </div>
    </div>
	)
}


