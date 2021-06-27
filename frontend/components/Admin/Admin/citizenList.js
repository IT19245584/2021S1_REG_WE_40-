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
            axios.get('http://localhost:5000/citizen/searchAllCitizen')
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })
    }else{

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            axios.get('http://localhost:5000/citizen/searchNIC/'+nic)
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })
    }

        function remove(nic){
                    axios.delete('http://localhost:5000/citizen/citizenDelete/'+nic).then(() =>{
        
                    Swal.fire({  
                    title: "Success!",
                    text: "Citizen Deleted.",
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

        }

        function healthUpdate(id){
              Cookies.set('citizenUpdateNIC',id, { expires: 30000, path: '' });
              window.location.href = "/HealthStatusUpdate";
        }

        function view(id){
              Cookies.set('CitizevView',id, { expires: 30000, path: '' });
              window.location.href = "/CitizevView";
        }

  return (
    <div className="container mt-5 pt-2">
    <MDBTypography variant='h2' className="text-center">Citizen List</MDBTypography>
    <div className="text-end mt-3 mb-3">
        <a href ="NewCitizenAdd" className="mr-2 ml-2">
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
          <th scope='col'>Name</th>
          <th scope='col'>Telephone Number</th>
          <th scope='col'>B day</th>
          <th scope='col'>Age</th>
          <th scope='col'>Profession</th>
          <th scope='col'>NIC</th>
          <th scope='col'>Address</th>
          <th scope='col'>Health Status</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
           {profile.map((profile,key) => (
        <tr>
          <th scope='row'>{profile.name}</th>
          <td>{profile.tel}</td>
          <td>{profile.bday}</td>
          <td>{profile.age}</td>
          <td>{profile.profession}</td>
          <td>{profile.nic}</td>
          <td>{profile.address}</td>
          <td  style={{cursor:'pointer'}} onClick={() => healthUpdate(profile.nic)}>{profile.healthStatus} &nbsp; &nbsp;<i class="text-success far fa-edit"></i></td>
          <td>
              <div className="row">
                <div className="col" onClick={() => remove(profile.nic)}>
                         <i class="fas fa-trash text-danger"></i>
                </div>
                <div className="col" onClick={() => view(profile.nic)}>
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