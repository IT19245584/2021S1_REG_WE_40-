import React, { Component } from 'react';
import HomePageNav from '../../navbars/homePageNav';
import Footer from '../../footer/footer';

class TechnicalCommittee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "Deepika Srinivasan",
            Department: "Department of Computer Science",
            Description: "Sample description "
        }
    }
    render() {
        return (
            <div>
                <HomePageNav />
                <div>
                    <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Technical Committee</h1>
                    </div>
                </div>
                <div>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '120rem', margin: 'auto', padding: '10px' }}>
                        <div className="card-body" >
                            <div class="row">
                                <div class="col-sm-6 mb-5">
                                    <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '45px' }}>{this.state.Name}</h5>
                                    <br></br>
                                    <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                        <div className="card-body  hover-zoom" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                            <img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg" class="img-fluid rounded-circle hover-shadow" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px' }}>{this.state.Department}</h3>
                                    <div className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '23px' }}>
                                        <p>{this.state.Description}</p>

                                    </div>
                                </div>
                                <div class="col-sm-6 mb-5">
                                    <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '45px' }}>{this.state.Name}</h5>
                                    <br></br>
                                    <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                        <div className="card-body  hover-zoom" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                            <img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg" class="img-fluid rounded-circle hover-shadow" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px' }}>{this.state.Department}</h3>
                                    <div className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '23px' }}>
                                        <p>{this.state.Description}</p>

                                    </div>
                                </div>
                                <div class="col-sm-6 mb-5">
                                    <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '45px' }}>{this.state.Name}</h5>
                                    <br></br>
                                    <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                        <div className="card-body  hover-zoom" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                            <img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg" class="img-fluid rounded-circle hover-shadow" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px' }}>{this.state.Department}</h3>
                                    <div className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '23px' }}>
                                        <p>{this.state.Description}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
                <Footer />
            </div>
        );
    }
}

export default TechnicalCommittee;

