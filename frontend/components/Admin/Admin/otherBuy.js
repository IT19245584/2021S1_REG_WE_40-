import React ,{useState , useEffect} from "react";
import BeforeNav from "./beforNavBuyer";
import axios from 'axios';
import Cookies from 'js-cookie';
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
  // const [price, setPrice] = useState("");
	// const [description, setDescription] = useState("");
	// const [name, setName] = useState("");
	// const [tel, setTel] = useState("");
	// const [address, setAddress] = useState("");
	// const [district, setDistrict] = useState("");
  // const [imageSelected, setimageSelected] = useState("");
  const nic = Cookies.get("nic");
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const type = params.get('id');

   const [Others,setOther] = useState([]);

  const [min, setMinPrice] = useState(0);
  const [max, setMaxPrice] = useState('');
  const [discrict, setDiscrict] = useState('');
  const [types, setType] = useState('');

  if(types === '' || types === 'All'){
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
          axios.get("http://localhost:8078/advertising/searchOtherAll/"+type)
          .then(res => setOther(res.data))
          .catch(error => console.log(error));
      })
  }else if(types === 'price'){
         
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          axios.get("http://localhost:8078/advertising/searchOtherAllPrice/"+type+"/"+min+"/"+max)
          .then(res => setOther(res.data))
          .catch(error => console.log(error));
      })
  }else{
    if(discrict === 'all'){
      // eslint-disable-next-line react-hooks/rules-of-hooks
          useEffect(() => {
              axios.get("http://localhost:8078/advertising/searchOtherAll/"+type)
              .then(res => setOther(res.data))
              .catch(error => console.log(error));
          })
    }else{
   // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          axios.get("http://localhost:8078/advertising/searchOtherAlldiscrict/"+type+"/"+discrict)
          .then(res => setOther(res.data))
          .catch(error => console.log(error));
      }) 
    }
  }

  function buyOther(id, owner , tel, discription,title, price , image, disctrict, address){
         reactLocalStorage.setObject("ViewOther", [id, owner , tel, discription,title, price , image, disctrict, address]);
         window.location.href = "/viewOther";
  }
 	return (
    <div className="bg-light">
    <BeforeNav/>
     <div>
      <MDBContainer className="mt-5" style={{paddingTop:'6%', paddingBottom : '10%'}}>
      <MDBCardTitle className="fs-2 text-uppercase fw-normal text-center pb-3">Buy A {type}</MDBCardTitle>
             <MDBCard className="bg-light mb-4" style={{ maxWidth: '100%' }}>
        <MDBCardBody>
          <div style={{padding:'0% 20% 2% 20%'}}>
             <MDBCardTitle className="text-normal fs-6 fw-bold">Active Searching Type</MDBCardTitle>
              <select className="form-select mr-5 ml-5" aria-label="Default select example" onChange={(e) =>{
                                            setType(e.target.value);
                                          }}>
                    <option value="" >Select Searching Type</option>
                    <option value="All">All</option>
                    <option value="price">Price</option>
                    <option value="district">District</option>
              </select>
          </div>
            <hr/>
           <MDBRow>
            <MDBCol className="bg-light"  sm='6'>
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
                    <option value="all">All</option>
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
             {Others.map((Other,key) => (
                <MDBCol>
                  <MDBCard>
                    <MDBCardBody>
                      <MDBCardTitle className="fs-5 text-danger">{Other.title} </MDBCardTitle>
                      <MDBCardText>
                        <i className="fas fa-user-alt"></i> {Other.owner}
                      </MDBCardText>
                      <MDBCardText>
                        <i className="fas fa-home"></i> {Other.address}
                      </MDBCardText>
                      <MDBCardText>
                       <i class="fas fa-dollar-sign"></i>  RS.{Other.price}.00
                      </MDBCardText>
                      <MDBCardText>
                       <i className="fas fa-mobile-alt"></i> {Other.tel}
                      </MDBCardText>
                      <MDBCardText>
                        {Other.discription}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                    <Link  onClick={() => buyOther(Other.id, Other.owner , Other.tel, Other.discription,Other.title, Other.price , Other.image, Other.disctrict, Other.address, Other.address)} >
                  <div className="d-grid gap-2">
                          <MDBBtn className="btn border-0 rounded-0"  style={{backgroundColor:'#004D40'}}>View <i className="fas fa-eye"></i></MDBBtn>
                  </div>
                  </Link>
                </MDBCol>
             ))}
          </MDBRow>
    </MDBContainer>
     </div>
    </div>
	)
}


