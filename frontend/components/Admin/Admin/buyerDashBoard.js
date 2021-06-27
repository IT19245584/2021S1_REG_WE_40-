import React ,{useState , useEffect} from "react";
import BeforeNav from "./beforNavBuyer";
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';

import {  MDBRow ,
          MDBCardImage, 
          MDBBtn ,
          MDBCard,
          MDBCardBody , 
          MDBCardTitle, 
          MDBCol, 
          MDBContainer,
          } from 'mdb-react-ui-kit';

export default function BuyerDashbord(){
      const nic = Cookies.get("nic");
      const [users,setUser] = useState([]);
      useEffect(() => {
          axios.get("http://localhost:8078/systemUser/searchUserProfile/"+nic)
          .then(res => setUser(res.data))
          .catch(error => console.log(error));
      })
    function  editProfile(name, tel, email, address, district) {
      reactLocalStorage.setObject("profileUpdates", [name, tel, email, address, district]);
      window.location.href = "/EditProfilebuyer";
   }
	return (
    <div>
    <BeforeNav/>
     <div>
      <MDBContainer className="mt-5" style={{paddingTop:'6%', paddingBottom : '10%'}}>
      <MDBCardTitle className="fs-2 text-uppercase fw-normal text-center pb-3">Your Profile</MDBCardTitle>
      <center>
       <MDBCard className="bg-light" style={{ maxWidth: '70%' }}>
          {users.map((user,key) => (
        <MDBCardBody>
           <MDBRow>
            <MDBCol className="bg-light"  sm='6'>
              <MDBCard className="bg-light shadow-0" >
                <MDBCardBody className="text-start">
                  <MDBCardTitle className="text-normal fs-6 fw-light">ID : {user.id}</MDBCardTitle>
                  <MDBCardTitle className="text-normal  fs-6 fw-light">Name : {user.name}</MDBCardTitle>
                  <MDBCardTitle className="text-normal  fs-6 fw-light">Telephone Number : {user.tel}</MDBCardTitle>
                  <MDBCardTitle className="text-normal  fs-6 fw-light">Email : {user.email}</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="bg-light"  sm='6'>
              <MDBCard className="bg-light shadow-0" >
                <MDBCardBody className="text-start">
                  <MDBCardTitle className="text-normal  fs-6 fw-light">NIC : {user.nic}</MDBCardTitle>
                  <MDBCardTitle className="text-normal  fs-6 fw-light">District : {user.district}</MDBCardTitle>
                  <MDBCardTitle className="text-normal  fs-6 fw-light">Address : {user.address}</MDBCardTitle>
                  <MDBCardTitle className="text-normal  fs-6 fw-light">Registered Time : {user.date_time}</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <div className="text-end">
              <Link  onClick={() => editProfile(user.name , user.tel, user.email, user.address , user.district)}  className="text-white"> <MDBBtn href='#'>Edit <i class="fas fa-edit"></i></MDBBtn></Link>
          </div>
        </MDBCardBody>
            ))}
      </MDBCard>
      </center>
      <MDBCardTitle className="fs-2 text-uppercase fw-normal text-center pb-3 pt-5 mt-5">I Want To Buy, </MDBCardTitle>
     <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/I0pexw3.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
             <div class="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <a href="/otherBuy?id=Real State" className="text-white"><i class="fas fa-bullseye"></i> Real State</a>
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100 ' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/nzZ739Y.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div class="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                 <a href="/otherBuy?id=Houses" className="text-white"><i class="fas fa-bullseye"></i> Houses</a>
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'  style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/pS0sSXe.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div class="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <a href="/otherBuy?id=Appartment" className="text-white"><i class="fas fa-bullseye"></i> Apartment</a>
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/sDMGFTw.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div class="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <a href="/otherBuy?id=Bussiness Places" className="text-white"><i class="fas fa-bullseye"></i> Bussiness Places</a>
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/UVRVL2w.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div class="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <a href="/otherBuy?id=Bording" className="text-white"><i class="fas fa-bullseye"></i> Boarding Rooms</a>
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/RqffRt0.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div class="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                 <a href="/landBuy?minprice=1&maxprice=1&discrict='null'" className="text-white"><i class="fas fa-bullseye"></i> Land Sell </a>
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
     </div>
    </div>
	)
}


