import React, { useState , useEffect } from "react";
import { MDBTable, MDBBtn, MDBInput, MDBTableHead, MDBTableBody, MDBTypography } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

export default function PCR() {
	    const [nic, setNIC] = useState("");
        const [profile,setProfile] = useState([]);

        if(nic === '' || nic=== null){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            axios.get('http://localhost:5000/pcr/searchPCRPending')
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })
    }else{

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            axios.get('http://localhost:5000/pcr/searchPCRPending/'+nic)
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })
    }

        function remove(id){
                    axios.delete('http://localhost:5000/pcr/pcrDelete/'+id).then(() =>{
        
                    Swal.fire({  
                    title: "Success!",
                    text: "PCR Deleted.",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                        if (okay) {
                            window.location.href = "/PCR";
                        }
                        });
            }).catch((err)=>{
                Swal.fire({  
                    title: "Error!",
                    text: "PCR Not Delete.",
                    icon: 'error',
                    confirmButtonText: "OK",
                    type: "success"})
            });

        }

        function healthUpdate(id){
              Cookies.set('citizenUpdateNIC',id, { expires: 30000, path: '' });
              window.location.href = "/HealthStatusUpdate";
        }

        function view(nic , id){
              Cookies.set('PcrStatusnic',nic, { expires: 30000, path: '' });
              Cookies.set('PcrStatusid',id, { expires: 30000, path: '' });
              window.location.href = "/PcrStatus";
        }

  return (
    <div className="container mt-5 pt-2">
    <MDBTypography variant='h2' className="text-center">PCR List</MDBTypography>
    <div className="text-end mt-3 mb-3">
        <a href ="NewCitizenAdd" className="mr-2 ml-2">
                <MDBBtn outline><i class="fas fa-plus"></i> Add New PCR</MDBBtn>
        </a>
         <a href ="officerProfile">
                <MDBBtn outline className='mx-2' color='danger'><i class="fas fa-tachometer-alt"></i> Dashboard</MDBBtn>
        </a>
    </div>
    <div className="pr-5 pl-5 pb-2">
          <h6>Search PCR Using NIC</h6>
          <MDBInput placeholder='NIC' className="mt-3 bg-white" id='form1' type='text'  onChange={(e) =>{
              setNIC(e.target.value);
            }}/>
    </div>
    <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Telephone Number</th>
          <th scope='col'>NIC</th>
          <th scope='col'>Status</th>
          <th scope='col'>Time Stamp</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
           {profile.map((profile,key) => (
        <tr>
          <th scope='row'>{profile.name}</th>
          <th scope='row'>{profile.telephone}</th>
          <th scope='row'>{profile.nic}</th>
          <th scope='row'>{profile.status}</th>
          <th scope='row'>{profile.timeStamp}</th>
    
          <td>
              <div className="row">
                <div className="col" onClick={() => remove(profile.id)}>
                         <i class="fas fa-trash text-danger"></i>
                </div>
                <div className="col" onClick={() => view(profile.nic , profile.id)}>
                        <i class="far fa-eye text-primary"></i>
                </div>
              </div>
          </td>
        </tr>
           ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}