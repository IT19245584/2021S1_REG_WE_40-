import React,{useState , useEffect} from "react";
import Footer from './admin_dashaboard Footer.jsx';
import Nav from './admin_dashboard Nav.jsx';
import SlideNav from './admin_dashboard SlideNav.jsx';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function Admin_Supplier(){

     const [Suppliers,setSupplier] = useState([]);
     useEffect(() => {
    axios.get('http://localhost:6060/admin_supplier/view')
    .then(res => setSupplier(res.data))
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
                           <h2 className="text-center text-uppercase text-dark">Suppliers</h2>
                       </div>
                       <div className="text-end me-5 mt-2">
                         <a href="Admin_add_Supplier">
                              <button type="button" class="btn btn-dark btn-sm">Add Suppliers</button>
                         </a>
                       </div>
                       <div className="row"style={{marginTop:'4%'}}>
                         {Suppliers.map((Supplier,index) => (
                        <div className="col-sm-4">
                         <div class="card" >
                            <img src="https://www.mastercontrol.com/images/default-source/gxp-lifeline/2020/october/2020-bl-conducting-supplier-audits_715x320.jpg" class="card-img-top" alt="..."/> 
                            <div class="card-body">
                              <h5 class="card-title  text-capitalize">
                                {Supplier.name}<br/>
                                <span className="h6 text-black-50 text-capitalize"><i class="bi bi-geo-alt-fill"></i> {Supplier.supplyItem1}</span>
                              </h5>
                               </div>
                              <div class="bg-white  d-grid gap-2">
                                <button type="button" onClick={()=>viewSupplier(Supplier._id)} class="btn btn-success btn-sm rounded-0">View</button>
                              </div>
                           
                          </div>
                        </div>
                         ))}
                      </div>
                     </div>
                </main>
               
            </div>
        </div>
        </div>
   )
}