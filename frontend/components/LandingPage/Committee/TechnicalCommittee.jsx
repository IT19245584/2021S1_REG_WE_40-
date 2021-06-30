import React, { Component } from 'react';
import HomePageNav from '../../navbars/homePageNav';
import Footer from '../../footer/footer';
import axios from 'axios';

class TechnicalCommittee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tec: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/techCommittee/viewTechnicalCommittee/')
            .then(response => {
                const org = response.data;
                this.setState({ org });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
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
                    <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                        <div className="card-body" >
                            <div className="row">
                                {this.state?.org?.length > 0 && this.state.org.map((item, index) =>
                                    <div className="col-sm-6 mb-5" key={index} style={{ boxShadow: '5px 5px 10px #b2aeb1, -5px -5px 10px #ffffff' }}>
                                        {item.status && item.status === 'Post' &&
                                            <div>
                                                <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '45px' }}>{item.name}</h5>
                                                <br></br>
                                                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                                    <div className="card-body  hover-zoom" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                                        <img src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + item.image} className="img-fluid rounded-circle hover-shadow" />
                                                    </div>
                                                </div>
                                                <br></br>
                                                <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px' }}>{item.department}</h3>
                                                <div className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '23px' }}>
                                                    <p>{item.description}</p>

                                                </div>
                                            </div>
                                        }
                                    </div>
                                )}
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

