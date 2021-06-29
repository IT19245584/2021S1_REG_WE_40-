import React, { Component } from 'react';

class AboutUsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <br></br>
                <center><hr className="w-75" /></center>
                <div className="row row-cols-1 row-cols-md-2 g-4"style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                    <div className="col">
                        <div className="card card border border-light shadow-0 mb-3" style={{textAlign:"center",borderRadius:'33px',background:'linear-gradient(225deg, #fffff5, #e6e2ce))',boxShadow:' -18px 18px 100px #7d7b70,18px -18px 100px #ffffff'}}  >
                            <h1>Conference Details</h1>
                            <br></br>
                            <p >Start : November 2</p>
                            <p>End : November 4</p>
                            <p>Wbsite : www.sliit.lk</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card border border-light shadow-0 mb-3" style={{textAlign:"center",borderRadius:'33px',background:'linear-gradient(225deg, #fffff5, #e6e2ce))',boxShadow:' -18px 18px 100px #7d7b70,18px -18px 100px #ffffff'}} >
                            <h1>Organizer</h1>
                            <br></br>
                            <p>Phone : 0768777199</p>
                            <p>Email : deepass1405@gmail.com</p>
                            <p>Wbsite : www.sliit.lk</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }} />
            </div>
        );
    }
}

export default AboutUsDetails;