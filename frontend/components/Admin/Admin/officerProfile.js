import React, { useState , useEffect } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Navbr from './NavBarOfficer';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Profileofficer() {
    const tel = Cookies.get('tel');
    
    const [profile,setProfile] = useState([])
    const [covid,setCovidSituation] = useState([])
        useEffect(() => {
            axios.get('http://localhost:5000/officer/searchTel/'+tel)
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })

       
        useEffect(() => {
            axios.get('https://api.covid19api.com/all')
            .then(res => setCovidSituation(res.data))
            .catch(error => console.log(error));
        })
                
              
                console.log(covid);
  return (
    <div className="pb-4 hometwo">
    <Navbr/>
     <MDBRow className="mt-5 mr-5 m-5">
          <MDBCardTitle className="text-center h2 text-uppercase mb-3">Officer DashBoard</MDBCardTitle>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody style={{marginLeft:'5%'}}>
           {profile.map((profile,key) => (
            <div>
            <MDBCardText>
              Name : {profile.name}
              <br/>
              NIC : {profile.nic}
            <br/>
              Area : {profile.area}
           <br/>
              Address : {profile.address}
            <br/>
              Email : {profile.email}
            <br/>
              Profession : {profile.profession}
            </MDBCardText>
            </div>
           ))}
            <div className="text-end"><MDBBtn className="mt-4 bg-success" href='#'>Edit Profile <i class="far fa-edit"></i></MDBBtn></div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
              <MDBCardTitle className="text-center h4 fw-light text-uppercase text-decoration-underline">Current Situation</MDBCardTitle>
            <MDBRow className="text-center mt-5">
                <MDBCol className="square border pt-4 pb-5 mr-1 ml-1">
                    <span className="h3 text-primary fw-bolder">200000<br/></span>
                   <span className="h2">Total cases</span>
                </MDBCol>
                <MDBCol className="square border pt-4  pb-5 mr-1 ml-1">
                    <span className="h3 text-success fw-bolder">200000<br/></span>
                    <span className="h2">Recovered</span>
                </MDBCol>
                <MDBCol className="square border pt-4  pb-5 mr-1 ml-1">
                    <span className="h3 text-danger fw-bolder">200000<br/></span>
                    <span className="h2">Deaths</span>
                </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <center>
    <MDBRow className='container mt-5 pt-5 row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://www.acc.org//-/media/Non-Clinical/Images/2020/04/09/COVID-19-Palliative-1-1200x800.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <a class="d-grid gap-2" href="CitizenList">
             <MDBBtn>Patients List</MDBBtn>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://images.financialexpress.com/2020/09/covid-19-cases-in-India-2.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
          
              <a  class="d-grid gap-2" href="PCR"><MDBBtn>PCR</MDBBtn></a>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://i.imgur.com/kq60rZj.jpeg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <a href="contacts" class="d-grid gap-2">
              <MDBBtn>Add Contacts</MDBBtn>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://www.aljazeera.com/wp-content/uploads/2020/04/733ac7b460d141689cfa68e47ea13fe5_18.jpeg?resize=770%2C513'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <a href="contactList" class="d-grid gap-2">
              <MDBBtn>Contact List</MDBBtn>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </center>
    </div>
  );
}