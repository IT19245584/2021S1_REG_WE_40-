import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {  MDBRow , MDBContainer , MDBFooter , MDBCol} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      
        <MDBFooter style={{backgroundColor:"#4DB6AC"}} className='text-center text-lg-left'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'><span className="text-dark text-decoration-underline"><strong> PROPERTY</strong></span><span className="text-white text-italic text-decoration-underline" ><small>-Whizz</small></span><br/><span className="fw-bold text-body fs-4"></span></h5>

              <p className="text-start">
               Ceylon Property is the most advanced real estate and rental marketplace in Sri Lanka. Our online platform offers various types of latest properties in Sri Lanka. We are aimed at changing the Real Estate industry of Sri Lanka. We offer all our services for free and we encourage every single user to advertise with us to feel our disruptive innovation in the Online Real Estate Market of Sri Lanka. We help you to Sell, Rent, or Buy any type of property for Free. 
              </p>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 '>
              <h5 className='text-uppercase'>Our Branches</h5>

              <ul className='list-unstyled mb-0 '>
                <li>
                  <a href='#!' className='text-dark'>
                   Colombo
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                   Gampaha
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Kandy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Mathara
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 text-start'>
              <h5 className='text-uppercase mb-0'>Contact Us</h5>

              <ul className='list-unstyled'>
                <li>
                  <a href='#!' className='text-dark'>
                    Address : 67/9, Delgoda
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Telephone : +94 71 - 1089287
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Fax : +94 71 - 1089287
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark text-lowercase'>
                    Email : PROPERTYWHIZZ@gmail.com
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className='text-center p-3 text-light' style={{backgroundColor:"#00796B"}}>
          &copy; {new Date().getFullYear()}{' '}
          <a className='text-light' href='https://Property-Whizz.com/'>
            Property-Whizz.com
          </a>
        </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;
