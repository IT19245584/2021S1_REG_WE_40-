import React, { Component } from 'react';

class AboutUsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutus:"The 3rd International conference on advancements in computing -2021 (ICAF2021) is organized by the Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an open forum for academics along with industry professionals to present the latest findings and research output and practical deployments in the Computer Science and Information Technology domains. Primary objective of the ICAC is to uplift the research culture and the quality of research done by Sri Lankan researchers. This conference will create a platform for national and international researchers to showcase their research output, networking opportunities to discuss innovative ideas, and initiate collaborative work. ICAC 2019 and ICAC 2020 were successfully conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all publications are available in IEEE Xplore digital library ",
            date:"July 2, 2021 - July 4, 2021"
        }
    }
    render() {
        return (
            <div>
                <div className="text-center container" style={{fontSize:"110%", fontStyle:"italic"}}>
                    <p className="pt-2 ps-2 pe2">{this.state.aboutus}</p>
                </div>
                <div className="text-center container" style={{fontSize:"200%"}}>
                    <p>{this.state.date}</p>
                </div>
            </div>

        );
    }
}

export default AboutUsBody;