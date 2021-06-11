import React, { Component } from 'react';
import Header from '../../navbars/homePageNav';
import Footer from '../../footer/footer';
import ImportantDatesHeading from './ImportantDatesHeading';
import ImportantDatesBody from './ImportantDatesBody';

class ImportantDates extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header/>
                <div>
                    <ImportantDatesHeading/>
                </div>
                <div>
                    <ImportantDatesBody/>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default ImportantDates;