import React,{useState , useEffect} from "react";
import Footer from './admin_dashaboard Footer.jsx';
import Nav from './admin_dashboard Nav.jsx';
import SlideNav from './admin_dashboard SlideNav.jsx';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function Admin_keynote(){

     const [KeynOtePersons,setKeynOtePersons] = useState([]);
     useEffect(() => {
    axios.get('http://localhost:6060/admin_keynote/view')
    .then(res => setKeynOtePersons(res.data))
    .catch(error => console.log(error));
  });

  function updatePersonStatus(id){
        axios.put("http://localhost:6060/admin_keynote/deleteEmail/"+id).then(() =>{

        Swal.fire({  
        title: "Success!",
        text: "Update Keynote Person",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
            window.location.href = "/Admin_keynote";
        }
        });

        
    }).catch((err)=>{

        Swal.fire({  
        title: "Error!",
        text: "Keynote Person Not Update",
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
                           <h2 className="text-center text-uppercase text-dark">Keynote Persons</h2>
                       </div>
                       <div className="row"style={{marginTop:'4%'}}>
                         {KeynOtePersons.map((KeynOtePerson,index) => (
                        <div className="col-sm-4">
                         <div class="card" >
                            {/* <img src={"https://api.cloudinary.com/v1_1/applicationframework2021/image/upload/"+KeynOtePerson.image} class="card-img-top" alt="..."/> */}
                            <div class="card-body">
                              <h5 class="card-title  text-capitalize">
                                {KeynOtePerson.name}<br/>
                                <span className="h6 text-black-50 text-capitalize">{KeynOtePerson.profession}</span>
                              </h5>
                              <p class="card-text ">{KeynOtePerson.description}</p>
                               </div>
                              <div class="bg-white  d-grid gap-2">
                                <button type="button" onClick={()=>updatePersonStatus(KeynOtePerson._id)} class="btn btn-success btn-sm rounded-0">Update</button>
                              </div>
                           
                          </div>
                        </div>
                         ))}
                        <div className="col-sm-4">
                         
                        </div>
                        <div className="col-sm-4">
                         
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