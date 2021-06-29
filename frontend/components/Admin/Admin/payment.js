import React ,{useState , useEffect} from "react";
import BeforeNav from "./beforNavSeller";
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
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
        <div className="container mt-5 pt-5" style={{padding:'25% 20% 25% 20%'}}>
          <MDBCardTitle className="fs-2 text-uppercase fw-normal text-center pb-3">Payment</MDBCardTitle>
               <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
                    <input type="hidden" name="merchant_id" value="1217115"/>
                    <input type="hidden" name="return_url" value="http://127.0.0.1:8080/SellerDashboard"/>
                    <input type="hidden" name="cancel_url" value="http://sample.com/cancel"/>
                    <input type="hidden" name="notify_url" value="http://sample.com/notify"/>
                    <input type="Hidden" name="order_id" value="PM"/>
                    <input type="hidden" name="items" value="Paid Membership"/><br/>
                    <div class="row">
                        <div class="col">
                            <label class="text-capititalize">Currency:</label>
                            <input type="text" class="form-control" name="currency" value="LKR"/>
                        </div>
                        <div class="col">
                            <label class="text-capititalize">Amount:</label>
                            <input type="text" class="form-control" name="amount" value="1000"/><br />
                        </div>
                    </div>
                    <label class="text-capititalize">Your Name:</label>
                    <input type="text" class="form-control" name="first_name" value=""/>
                    <div class="d-grid gap-2 mt-4">
                        <input class="btn btn-primary" type="submit" value="Pay Now "/>
                    </div>
                    <input type="hidden" name="last_name" value=""/><br/>
                    <input type="hidden" name="email" value=""/>
                    <input type="hidden" name="phone" value=""/><br/>
                    <input type="hidden" name="address" value=""/>
                    <input type="hidden" name="city" value=""/>
                    <input type="hidden" name="country" value=""/><br/><br/>
                </form>
              </div>
    </div>
	)
}


