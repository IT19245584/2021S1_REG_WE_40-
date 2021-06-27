import React, { Component } from 'react';
import ContactHeading from './ContactHeading';
import ContactBody from './ContactBody';
import HomePageNav from '../../navbars/homePageNav';
import Footer from '../../footer/footer';

class ContactUs extends Component {
    state = {}
    render() {
        return (
            <div>
                <HomePageNav/>
                <div>
                    <ContactHeading />
                </div>
                <ContactBody />
                <Footer/>
            </div>
        );
    }
}

export default ContactUs;