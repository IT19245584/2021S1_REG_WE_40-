import React, { Component } from 'react';
import KeynoteHeading from './KeynoteHeading';
import KeynoteBody from './KeynoteBody';
import Header from '../../navbars/homePageNav';
import Footer from '../../footer/footer';

class Keynote extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <KeynoteHeading />
                </div>
                <KeynoteBody />
                <Footer />
            </div>
        );
    }
}

export default Keynote;