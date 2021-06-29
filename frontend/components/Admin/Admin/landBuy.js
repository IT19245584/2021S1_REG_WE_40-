import React ,{useState , useEffect} from "react";
import BeforeNav from "./beforNavBuyer";
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './nagrokGloableVariable';
import {reactLocalStorage} from 'reactjs-localstorage';

import {
    
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBCardTitle,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardText,
      } from 'mdb-react-ui-kit';

export default function LandSelling(){

  const nic = Cookies.get("nic");
  // const search = window.location.search;
  // const params = new URLSearchParams(search);
  // const minprice = params.get('minprice');
  // const maxprice = params.get('maxprice');
  // const discrict = params.get('discrict');
  const [lands,setLand] = useState([]);

  const [min, setMinPrice] = useState(0);
  const [max, setMaxPrice] = useState('');
  const [discrict, setDiscrict] = useState('');
  const [type, setType] = useState('');
 

  if(type === '' || type === 'All'){
      // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
                axios.get("http://localhost:8078/advertising/searchLandAll")
                .then(res => setLand(res.data))
                .catch(error => console.log(error));
            })
  }else if(type === 'price'){
         
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          axios.get("http://localhost:8078/advertising/searchLandAllByPrice/"+min+"/"+max)
          .then(res => setLand(res.data))
          .catch(error => console.log(error));
      })
  }else{
   // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          axios.get("http://localhost:8078/advertising/searchLandAllByDistrict/"+discrict)
          .then(res => setLand(res.data))
          .catch(error => console.log(error));
      }) 
  }
  function buyLand(id, owner , tel, discription, price , image, disctrict, address){
         reactLocalStorage.setObject("ViewLands", [id, owner , tel, discription, price , image, disctrict, address]);
         window.location.href = "/ViewLands";
  }



 	return (
    <div className="bg-light">
    <BeforeNav/>
     <div>
      <MDBContainer className="mt-5" style={{paddingTop:'6%', paddingBottom : '10%'}}>
      <MDBCardTitle className="fs-2 text-uppercase fw-normal text-center pb-3">Buy A Land</MDBCardTitle>
       <MDBCard className="bg-white mb-4" style={{ maxWidth: '100%' }}>
        <MDBCardBody>
          <div style={{padding:'0% 20% 2% 20%'}}>
             <MDBCardTitle className="text-normal fs-6 fw-bold">Active Searching Type</MDBCardTitle>
              <select className="form-select mr-5 ml-5" aria-label="Default select example" onChange={(e) =>{
                                            setType(e.target.value);
                                          }}>
                    <option value="" >Select Searching Type</option>
                    <option value="price">Price</option>
                    <option value="district">District</option>
              </select>
          </div>
            <hr/>
           <MDBRow>
            <MDBCol className="bg-white"  sm='6'>
              <MDBCard className="bg-light shadow-0" >
                <MDBCardBody className="text-start">
                  <MDBCardTitle className="text-normal fs-6 fw-bold">Search Using Price</MDBCardTitle>
                  <MDBCardTitle className="text-normal  fs-6 fw-light ml-3">Max :</MDBCardTitle>
                  <div className="ml-3"><MDBInput  placeholder='Type Maximum Price(Number Only)'  id='form1' type='number'  onChange={(e) =>{
                                            setMaxPrice(e.target.value);
                                          }}/></div>
                  <MDBCardTitle className="text-normal  mt-3 fs-6 fw-light ml-3">Min : </MDBCardTitle>
                  <div className="ml-3"><MDBInput   value={min} placeholder='Type Minimum Price(Number Only)' id='form1' type='number'  onChange={(e) =>{
                                            setMinPrice(e.target.value);
                                          }}/></div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="bg-light"  sm='6'>
              <MDBCard className="bg-light shadow-0" >
                <MDBCardBody className="text-start">
                  <MDBCardTitle className="text-normal fs-6 fw-bold">Search Using District</MDBCardTitle>
                  <MDBCardTitle className="text-normal  fs-6 fw-light ml-3">&nbsp;</MDBCardTitle>
                    <select className="form-select" aria-label="Default select example" onChange={(e) =>{
                                            setDiscrict(e.target.value);
                                          }}>
                    <option   >Select District</option>
                    <option value="All">All</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Kaluthara">Kaluthara</option>
                    <option value="Mathara">Mathara</option>
                    <option value="Galle">Galle</option>
                    <option value="Hambanthota">Hambanthota</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Kagalle">Kagalle</option>
                    <option value="Anuradapura">Anuradapura</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kilinochchiya">Kilinochchiya</option>
                    <option value="Vavuniya">Vavuniya</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Puttalam">Puttalam</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Matale">Matale</option>
                    <option value="Ratnapura">Ratnapura</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Monaragala">Monaragala</option>
                    </select>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
       <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
             {lands.map((land,key) => (
                <MDBCol>
                  <MDBCard>
                    <MDBCardBody>
                      <MDBCardTitle className="fs-5 text-danger">Rs. {land.price} Land In {land.disctrict} </MDBCardTitle>
                      <MDBCardText>
                        <i className="fas fa-home"></i> {land.address}
                      </MDBCardText>
                      <MDBCardText>
                       <i className="fas fa-mobile-alt"></i> {land.tel}
                      </MDBCardText>
                      <MDBCardText>
                        {land.discription}
                      </MDBCardText>
                    </MDBCardBody>
                    <Link  onClick={() => buyLand(land.id, land.owner , land.tel, land.discription, land.price , land.image, land.disctrict, land.address, land.address)} >
                    <div className="d-grid gap-2">
                          <MDBBtn className="btn border-0 rounded-0"  style={{backgroundColor:'#004D40'}}>View <i className="fas fa-eye"></i></MDBBtn>
                    </div>
                    </Link>
                  </MDBCard>
                </MDBCol>
             ))}
          </MDBRow>
    </MDBContainer>
     </div>
    </div>
	)
}


