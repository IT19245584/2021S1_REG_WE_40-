import React, { useState , useEffect } from "react";
import { MDBTable, MDBBtn, MDBInput, MDBTableHead, MDBTableBody, MDBTypography } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

export default function CitizenLitTable() {
	    const [nic, setNIC] = useState("");
        const [profile,setProfile] = useState([]);

        if(nic === '' || nic=== null){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            axios.get('http://localhost:5000/contact/search')
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })
    }else{

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            axios.get('http://localhost:5000/contact/searchNIC/'+nic)
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })
    }


  return (
    <div className="container mt-5 pt-2">
    <MDBTypography variant='h2' className="text-center">Contact List</MDBTypography>
    <div className="text-end mt-3 mb-3">
        <a href ="contacts" className="mr-2 ml-2">
                <MDBBtn outline><i class="fas fa-plus"></i> Add New Citizen</MDBBtn>
        </a>
         <a href ="officerProfile">
                <MDBBtn outline className='mx-2' color='danger'><i class="fas fa-tachometer-alt"></i> Dashboard</MDBBtn>
        </a>
    </div>
    <div className="pr-5 pl-5 pb-2">
          <h6>Search Citizen NIC</h6>
          <MDBInput placeholder='NIC' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setNIC(e.target.value);
            }}/>
    </div>
    <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>Covid Person NIC</th>
          <th scope='col'>Contact Person Name</th>
          <th scope='col'>Contact Person  Tel</th>
          <th scope='col'>Contact Person Address</th>
          <th scope='col'>Contact Person NIC</th>
          <th scope='col'>Date</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
           {profile.map((profile,key) => (
        <tr>
          <th scope='row'>{profile.covidPersonnic}</th>
          <td>{profile.name}</td>
          <td>{profile.telephone}</td>
          <td>{profile.address}</td>
          <td>{profile.nic}</td>
          <td>{profile.timeStamp}</td>
        </tr>
           ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}