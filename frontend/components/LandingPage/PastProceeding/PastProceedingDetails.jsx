import React, { Component } from 'react';

class PastProceedingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            details:"International Conference on Advancements in Computing (ICAC) was established in the year of 2019 with the aim of collaborate with industry professional to present latest issues and trends in broader domain of computing. Along with the theme of “Advancements in Computing” the conference is aimed to uplift the Sri Lankan and international scholarly index by upgrading the National Conference on Technology & Management (NCTM)which held for 10 consecutive years at SLIIT along with the sponsorship of IEEE- Sri Lanka Section (Institute of Electrical and Electronic Engineers) ICAC conference successfully completed for two consecutive years (2019 and 2020) with over 80 local and international papers and more than 100 participants under the technical sponsorship of IEEE Sri Lankan section."
         }
    }
    render() { 
        return ( 
            <div>
                <div className="text-center container" style={{fontSize:"110%", fontStyle:"italic"}}>
                    <p className="pt-2 ps-2 pe2">{this.state.details}</p>
                </div>
            </div>
         );
    }
}
 
export default PastProceedingDetails;