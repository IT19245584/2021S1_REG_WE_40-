import React, { useState } from 'react';
import './nagrokGloableVariable';
import { MDBCard, 
         MDBCardTitle, 
         MDBCardText, 
         MDBCardBody, 
         MDBCardImage, 
         MDBRow, 
         MDBIcon,
         MDBBtn,
         MDBCol } from 'mdb-react-ui-kit';
import BeforeNav from "./beforNavBuyer";
import {reactLocalStorage} from 'reactjs-localstorage';

function LandView() {
    var ViewLands = reactLocalStorage.getObject('ViewOther');
     
    const id = ViewLands[0];
    const [name, setName] = useState(ViewLands[1]);
    const [tel, setTel] = useState(ViewLands[2]);
	  const [description, setDescription] = useState(ViewLands[3]);
    const [title, setTitle] = useState(ViewLands[4]);
    const [price, setPrice] = useState(ViewLands[5]);
    const [image, setImage] = useState('https://res.cloudinary.com/nadun/image/upload/v1618560570/'+ViewLands[6]);
	  const [district, setDistrict] = useState(ViewLands[7]);
	  const [address, setAddress] = useState(ViewLands[8]);

  return (
    <div>
    <BeforeNav/>
    <div className="container">
     <MDBCard style={{ maxWidth: '100%', marginTop:'10%' ,  marginBottom:'10%' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
             {description}
            </MDBCardText>
            <MDBCardText>
                <MDBIcon className='ms-1' icon='money-bill' size='1x' /> Price : {price}
            </MDBCardText>
            <MDBCardText>
                <MDBIcon className='ms-1' icon='mobile-alt' size='1x' /> Tel : {tel}
            </MDBCardText>
            <MDBCardText>
                <MDBIcon className='ms-1' icon='map' size='1x' /> Address : {address}
            </MDBCardText>
            <MDBCardText>
                <MDBIcon className='ms-1' icon='map-marker-alt' size='1x' /> District : {district}
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <div className="text-end mb-3" style={{paddingRight:'5%'}}>
             <a href="/BuyerDashBoard" > <MDBBtn color="black" size='sm'>View More</MDBBtn></a>
        </div>
      </MDBRow>
    </MDBCard>
    </div>
    </div>
  );
}

export default LandView;
