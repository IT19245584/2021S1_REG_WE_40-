import React, { useState , useEffect } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';

export default function NavbavOfficer() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='dark' className="p-4">
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' className="text-warning" href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
          <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' className="text-warning"  href='#'>
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem> 
          <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' className="text-warning" href='#'>
                Logout
              </MDBNavbarLink>
            </MDBNavbarItem> 
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}