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
  
   const nic = Cookies.get('CitizevView');
   console.log(nic);
   const [profile,setProfile] = useState([]);
    useEffect(() => {
            axios.get('http://localhost:5000/citizen/searchNIC/'+nic)
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })
return (
  <div className="home">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{width:'99%'}}>
      <MDBCol></MDBCol>
      <MDBCol style={{marginTop:'10%'}} className="bg-light pt-3 pl-5 pr-5 pb-5 square border border-1 shadow-2">
 {profile.map((profile,key) => (
       <div style={{paddingLeft:'10%'}}>
        <MDBTypography variant='h3' className="text-center">{profile.name}'s Profile</MDBTypography>
        <span>Name : {profile.name}</span><br/>
        <span>NIC : {profile.nic}</span><br/>
        <span>Address : {profile.address}</span><br/>
        <span>Phone Number : {profile.phone}</span><br/>
        <span>B day : {profile.bday}</span><br/>
        <span>Age : {profile.age}</span><br/>
        <span>District : {profile.district}</span><br/>
        <span>Profession : {profile.profession}</span><br/>
         <span className="text-danger">Healt Status : {profile.healthStatus}</span><br/>
       
      </div>
 ))}
       <div className="mt-3 d-grid gap-2 text-end">
          <a href="CitizenList"> <MDBBtn type="submit">Back</MDBBtn></a>
       </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
   </div>
   );
 }
