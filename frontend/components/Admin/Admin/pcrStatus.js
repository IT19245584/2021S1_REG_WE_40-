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

export default function PcrStatus(props){


   const PcrStatusid = Cookies.get('PcrStatusid');
   const PcrStatusnic = Cookies.get('PcrStatusnic');

   const [nic, setNIc] = useState(PcrStatusnic);
   const [healthStatus, setStatus] = useState("");


   function update(e){
     e.preventDefault();

   }
return (
  <div className="home">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{width:'99%'}}>
      <MDBCol></MDBCol>
      <MDBCol style={{marginTop:'10%'}} className="bg-light pt-3 pl-5 pr-5 pb-5 square border border-1 shadow-2">
      
       <MDBTypography variant='h2' className="text-center">Update PCR Status</MDBTypography>
      
        
        <MDBInput  className="mt-3 bg-white" id='form1' type='text' value={nic} onChange={(e) =>{
              setNIc(e.target.value);
            }} />
        <select class="form-select" aria-label="Default select example" style={{marginTop:'3%'}} onChange={(e) =>{
              setStatus(e.target.value);
            }} >
            <option selected>Select PCR Status</option>
            <option value="Reject">Reject</option>
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
        </select>
        
       <div className="mt-3 d-grid gap-2">
           <MDBBtn type="submit" onClick={update}>Update</MDBBtn>
       </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
   </div>
   );
 }
