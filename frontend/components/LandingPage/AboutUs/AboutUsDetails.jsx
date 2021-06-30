import React, { Component } from 'react';
import axios from 'axios';

class AboutUsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/aboutus/view')
            .then(response => {
                const dates = response.data;
                this.setState({ dates });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    render() {
        return (
            <div>
                <br></br>
                <center><hr className="w-75" /></center>
                {this.state?.dates?.length > 0 && this.state.dates.map((item, index) =>
                    <div className="row row-cols-1 row-cols-md-2 g-4" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                        <div className="col">
                            <div className="card card border border-light shadow-0 mb-3" style={{ textAlign: "center", borderRadius: '33px', background: 'linear-gradient(225deg, #fffff5, #e6e2ce))', boxShadow: ' -18px 18px 100px #7d7b70,18px -18px 100px #ffffff' }}  >
                                <h1>Conference Details</h1>
                                <br></br>
                                <p >Start : {item.conferenceStart}</p>
                                <p>End : {item.conferenceEnd}</p>
                                <p>Wbsite : {item.conferenceWebsite}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card border border-light shadow-0 mb-3" style={{ textAlign: "center", borderRadius: '33px', background: 'linear-gradient(225deg, #fffff5, #e6e2ce))', boxShadow: ' -18px 18px 100px #7d7b70,18px -18px 100px #ffffff' }} >
                                <h1>Organizer</h1>
                                <br></br>
                                <p>Phone : {item.organizerPhone}</p>
                                <p>Email : {item.organizerEmail}</p>
                                <p>Wbsite : {item.organizerWebsite}</p>
                            </div>
                        </div>
                    </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }} />
            </div>
        );
    }
}

export default AboutUsDetails;