import React, { Component } from 'react';
import Header from '../../navbars/homePageNav';
import Footer from '../../footer/footer';
import PastHeading from './PastProceedingHeading';
import PastBody from './PastProceedingDetails';
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
                    <PastBody/>
                </div>
                {/* <div>
                    <PastImage/>
                </div> */}
                <Footer/>
            </div>
         );
    }
}
 
export default PastProceeding;