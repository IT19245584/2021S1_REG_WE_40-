import React,{useState , useEffect} from "react";
import Footer from './admin_dashaboard Footer.jsx';
import Nav from './admin_dashboard Nav.jsx';
import SlideNav from './admin_dashboard SlideNav.jsx';
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function Admin_Add_Suppliers(){
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [tel1, setTel] = useState("");
    const [tel2, setLand] = useState("");
    const [supplyItem1, setItems1] = useState("");
    const [supplyItem2, setItems2] = useState("");
    const [supplyItem3, setItems3] = useState("");
    const [comment, setComments] = useState("");


    const [isValid, setIsValid] = useState(false);

    function saveFunction(e){
    e.preventDefault();
    const admin_supplier ={
         email,
         name,
         address,
         tel1,
         tel2,
         supplyItem1,
         supplyItem2,
         supplyItem3,
         comment
        }
   	axios.post("http://localhost:6060/admin_supplier/add",admin_supplier).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Supplier Added",
			icon: 'success',
			timer: 2000,
            showConfirmButton: false,
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/Admin_Supplier";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Supplier Not Added",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
		})
    }
  const emailRegex = /\S+@\S+\.\S+/;
  const validateEmail = (event) => {
    const email = event;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Valid email.');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email.');
    }
    setEmail(event);
  };
return (
     <div class="sb-nav-fixed">
        <Nav/>
        <div id="layoutSidenav">
            <SlideNav/>
            <div id="layoutSidenav_content">
                <main style={{ marginBottom:'5%'}}>
                    <div className="container-fluid px-4 mt-5 mb-5">
                      <div class="container" style={{marginTop:'10%', marginBottom:'10%'}}>
                        <div class="row justify-content-center align-items-center" style={{height:'20vh'}}>
                          <div className="col-7 p-3 bg-light">
                               <h3 className="text-center text-uppercase text-decoration-underline d-letter-spacing">Add Suppliers</h3>
                                <div class="mb-3 mt-4">
                                    <label  class="form-label">Name</label>
                                    <input type="Name" class="form-control" id="exampleFormControlInput1"  onChange={(e) =>{
                                        setName(e.target.value);
                                    }}/>
                                </div>
                                <div class="mb-3">
                                    <label  class="form-label">Email</label>
                                    <input type="Name" class="form-control" onChange={(e) =>{
                                        validateEmail(e.target.value);
                                    }}/>
                                    <small   className={`message ${isValid ? 'success' : 'error'}`} >
                                        {message}
                                    </small>
                                </div>
                               <div class="mb-3">
                                    <label  class="form-label">Address</label>
                                    <input type="Name" class="form-control"   onChange={(e) =>{
                                        setAddress(e.target.value);
                                    }}/>
                                </div>
                                <div class="mb-3">
                                  <div className="row">
                                     <div className="col">
                                        <label  class="form-label">Telephone Number</label>
                                        <input type="Name" class="form-control"  onChange={(e) =>{
                                        setTel(e.target.value);
                                    }}/>
                                     </div>
                                     <div className="col">
                                        <label  class="form-label">Land Number</label>
                                        <input type="Name" class="form-control"   onChange={(e) =>{
                                        setLand(e.target.value);
                                    }}/>
                                     </div>
                                  </div>
                                    
                                </div>
                                <hr/>
                                <br/>
                                  <div class="mb-3 ">
                                  <div className="row mt-3">
                                    <label  class="form-label">Suppling Items</label>
                                     <div className="col">
                                        <input type="Name" list="daatList1" class="form-control"  onChange={(e) =>{
                                        setItems1(e.target.value);
                                    }}/>
                                    <datalist id="daatList1">
                                      <option value="Flora"/>
                                      <option value="Foods"/>
                                      <option value="Papers"/>
                                      <option value="Transport"/>
                                      <option value="Event Planing"/>
                                    </datalist>
                                     </div>
                                     <div className="col">
                                        <input type="Name" list="daatList2" class="form-control" onChange={(e) =>{
                                        setItems2(e.target.value);
                                    }}/>
                                     <datalist id="daatList2">
                                      <option value="Flora"/>
                                      <option value="Foods"/>
                                      <option value="Papers"/>
                                      <option value="Transport"/>
                                      <option value="Event Planing"/>
                                    </datalist>
                                     </div>
                                  </div>
                                  <div className="row mt-3">
                                     <div className="col">
                                        <input type="Name" class="form-control"  list="daatList3"  onChange={(e) =>{
                                        setItems3(e.target.value);
                                    }}/>
                                     <datalist id="daatList3">
                                      <option value="Flora"/>
                                      <option value="Foods"/>
                                      <option value="Papers"/>
                                      <option value="Transport"/>
                                      <option value="Event Planing"/>
                                    </datalist>
                                     </div>
                                     <div className="col">
                                      
                                     </div>
                                  </div>
                                </div>
                                 <div class="mb-3 ">
                                    <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
                                     <textarea class="form-control" rows="3" onChange={(e) =>{
                                        setComments(e.target.value);
                                    }}></textarea>
                                 </div>
                                 <div className="text-end">
                                    <button type="submit" onClick={saveFunction} class="btn btn-sm btn-dark">Save</button>
                                 </div>
                          </div>
                        </div>
                    </div>
                    </div>
                </main>
            
            </div>
        </div>
        </div>
   )
}