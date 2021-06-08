import React, { Component } from 'react';
import AboutUsHeading from './AboutUsHeading';
import AboutUsBody from './AboutUsBody';
import AboutUsDetails from './AboutUsDetails';
import Header from '../../navbars/homePageNav';
import Footer from '../../footer/footer';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <AboutUsHeading />
                </div>
                <div>
                    <AboutUsBody />
                </div>
                <div>
                    <AboutUsDetails />
                </div>
                <Footer />
            </div>
        );
    }
}

export default AboutUs;