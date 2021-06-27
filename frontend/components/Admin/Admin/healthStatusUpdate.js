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

export default function RegCitizen(props){


   const HealthNIC = Cookies.get('citizenUpdateNIC');
   console.log(HealthNIC);
   const [nic, setNIc] = useState(HealthNIC);
   const [healthStatus, setStatus] = useState("");


   function update(e){
     e.preventDefault();

     if(healthStatus === 'Dead'){
              axios.delete('http://localhost:5000/citizen/citizenDelete/'+nic).then(() =>{
        
                    Swal.fire({  
                    title: "Success!",
                    text: "Dead Citizen Remove For Citizen List.",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                        if (okay) {
                            window.location.href = "/CitizenList";
                        }
                        });
            }).catch((err)=>{
                Swal.fire({  
                    title: "Error!",
                    text: "Citizen Not Delete.",
                    icon: 'error',
                    confirmButtonText: "OK",
                    type: "success"})
            });
     }else{
     const newhealthStatus ={
            healthStatus,
     }
     axios.put('http://localhost:5000/citizen/updatehealth/'+nic,newhealthStatus).then(() =>{
        
                    Swal.fire({  
                    title: "Success!",
                    text: "Health Status Update.",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                        if (okay) {
                            window.location.href = "/CitizenList";
                        }
                        });
            }).catch((err)=>{
                Swal.fire({  
                    title: "Error!",
                    text: "Health Status Not Update.",
                    icon: 'error',
                    confirmButtonText: "OK",
                    type: "success"})
            });
        }
   }
return (
  <div className="home">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{width:'99%'}}>
      <MDBCol></MDBCol>
      <MDBCol style={{marginTop:'10%'}} className="bg-light pt-3 pl-5 pr-5 pb-5 square border border-1 shadow-2">
      
       <MDBTypography variant='h2' className="text-center">Update Health Status</MDBTypography>
      
        
        <MDBInput  className="mt-3 bg-white" id='form1' type='text' value={nic} onChange={(e) =>{
              setNIc(e.target.value);
            }} />
        <select class="form-select" aria-label="Default select example" style={{marginTop:'3%'}} onChange={(e) =>{
              setStatus(e.target.value);
            }} >
            <option selected>Select Health Status</option>
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
            <option value="Discharge">Discharge</option>
            <option value="Dead">Dead</option>
        </select>
        
       <div className="mt-3 d-grid gap-2">
           <MDBBtn type="submit" onClick={update}>Update</MDBBtn>
            <a  className="text-center text-muted" href="/officerProfile"> Dashboard</a>
       </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
   </div>
   );
 }
