import React, { useEffect , useState } from "react";
import { MDBInput, 
         MDBTypography, 
         MDBBtn, 
         MDBRow, 
         MDBCol } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../App.css'

export default function Contacts(props){
  
     const [covidPersonnic, setCovidPersonnic] = useState("");
	 const [nic, setNIC] = useState("");
     const [name, setName] = useState("");
	 const [telephone, setPhone] = useState("");
	 const [address, setAddress] = useState("");

   function submit(e){
     e.preventDefault();
      const newContact ={
            covidPersonnic, 
            name, 
            telephone, 
            address, 
            nic
     }

		axios.post("http://localhost:5000/contact/add",newContact).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Contact Person Add",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/Index";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Contact Person Not Add.",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
		})
   }
return (
  <div className="home">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{width:'99%'}}>
      <MDBCol></MDBCol>
      <MDBCol style={{marginTop:'10%'}} className="bg-light pt-3 pl-5 pr-5 pb-5 square border border-1 shadow-2">
      
       <MDBTypography variant='h2' className="text-center">Citizen Registration</MDBTypography>
      
        <MDBInput label='Contact Person NIC' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setNIC(e.target.value);
            }}/>
        <MDBInput label='Contact Person Name' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setName(e.target.value);
            }}/> 
        <MDBInput label='Contact Person  Phone' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setPhone(e.target.value);
            }}/>
        <MDBInput label='Contact Person Address' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setAddress(e.target.value);
            }}/>
        <MDBInput label='Covid Person NIC' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setCovidPersonnic(e.target.value);
            }}/>
       <div className="mt-3 d-grid gap-2">
           <MDBBtn type="submit" onClick={submit}>Submit</MDBBtn>
           <a  className="text-center text-muted" href="/officerProfile"> Dashboard</a>
       </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
   </div>
   );
 }
