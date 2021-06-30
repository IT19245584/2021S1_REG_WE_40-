import React,{useState , useEffect} from "react";
import Footer from './admin_dashaboard Footer.jsx';
import Nav from './admin_dashboard Nav.jsx';
import SlideNav from './admin_dashboard SlideNav.jsx';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function Admin_dashaboard(){
  const [profile,setProfile] = useState([]);
  const [Profiletwo,setProfiletwo] = useState([]);
  useEffect(() => {
            axios.get('http://localhost:6060/admin_side_user/searchUser')
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })

   useEffect(() => {
            axios.get('http://localhost:6060/admin_side_user/searchApprovedUser')
            .then(res => setProfiletwo(res.data))
            .catch(error => console.log(error));
        })

  function viewUserDetails(email){
      
        axios.put("http://localhost:6060/admin_side_user/updateStatus/"+email).then(() =>{

        Swal.fire({  
        title: "Success!",
        text: "Status Update Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
            window.location.href = "/Admin_dashboard_user";
        }
        });

        
    }).catch((err)=>{

        Swal.fire({  
        title: "Error!",
        text: "Status Updating Not Saved",
        icon: 'error',
        confirmButtonText: "OK",
        type: "success"})
    })
  }

  function deleteUser(email){
   axios.delete("http://localhost:6060/admin_side_user/deleteEmail/"+email).then(() =>{

        Swal.fire({  
        title: "Success!",
        text: "Delete Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
            window.location.href = "/Admin_dashboard_user";
        }
        });

        
    }).catch((err)=>{

        Swal.fire({  
        title: "Error!",
        text: "Delete Not Success!",
        icon: 'error',
        confirmButtonText: "OK",
        type: "success"})
    })
  }
return (
     <div class="sb-nav-fixed">
        <Nav/>
        <div id="layoutSidenav">
            <SlideNav/>
            <div id="layoutSidenav_content">
                <main>
                 
                    <div className="container-fluid px-4">
                        <div className="container-fluid px-4 pt-5 mt-3">
                           <h2 className="text-center text-uppercase text-dark text-decoration-underline">Users Mangement</h2>
                       </div>
                       <div className="text-end me-2 mt-5 mb-2">
                            <a href="Admin_dashboard_Add_user"><button type="button" class="btn btn-sm btn-secondary shadow-0">Add New User</button></a>{' '}
                            <a href="Admin_Reset_password"><button type="button" class="btn btn-sm btn-secondary shadow-0">Reset Password</button></a>{' '}
                           <a href="#RegisteredUsers"><button type="button" class="btn btn-sm btn-dark shadow-0">Approved Users</button></a>{' '}
                            <a href="#PenddingUsers"><button type="button" class="btn btn-sm btn-dark shadow-0">Pendding Users</button></a>
                       </div>
                       <div class="card shadow mb-4" id="PenddingUsers">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-dark">Registration Reqest Sent Users </h6>
                        </div>
                        
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Email</th>
                                            <th>Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      	{profile.map((profile,key) => (
                                        <tr>
                                            <td>STD-{profile._id}</td>
                                            <td>{profile.email}</td>
                                            <td>{profile.type}</td>
                                            <td className="text-center">
                                            
                                              <button type="button" onClick={()=>viewUserDetails(profile.email)} className="btn-sm btn btn-outline-white"><i class="bi bi-pencil-fill text-success"></i></button>
                                            </td>
                                        </tr>
                                          ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                  </div>

                    <div className="container-fluid px-4">
                        <div className="container-fluid px-4 pt-5 mt-3">
                           
                       </div>
                       <div class="card shadow mb-4" id="RegisteredUsers">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-dark">Registered Users </h6>
                        </div>
                        
                        <div class="card-body" >
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Email</th>
                                            <th>Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      	{Profiletwo.map((profile,key) => (
                                        <tr>
                                            <td>STD-{profile._id}</td>
                                            <td>{profile.email}</td>
                                            <td>{profile.type}</td>
                                            <td className="text-center">
                                            
                                              <button type="button" onClick={()=>deleteUser(profile.email)} className="btn-sm btn btn-outline-white"><i class="bi bi-trash-fill text-danger"></i></button>
                                            </td>
                                        </tr>
                                          ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                  </div>
                </main>
               <Footer/>
            </div>
        </div>
        </div>
   )
}