import React, { Component } from 'react';
import Header from '../../navbars/homePageNav';
import Footer from '../../footer/footer';
import PastHeading from './PastProceedingHeading';
import PastImage from './PastProceedingImages';

class PastProceeding extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header/>
                <div>
                    <PastHeading/>
                </div>
                <div>
                    <PastImage/>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default PastProceeding;