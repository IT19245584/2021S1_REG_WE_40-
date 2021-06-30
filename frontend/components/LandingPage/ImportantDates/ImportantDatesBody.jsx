import React, { Component } from 'react';
import axios from 'axios';

class ImportantDatedsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/importantDates/view')
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
                <div className='container'>
                    <a href='/dates-pdf'><button type="button" className="btn btn-orange  btn-sm" style={{ letterSpacing: '2px' }}>Get PDF <i className="bi bi-arrow-right-circle-fill"></i></button></a>
                </div>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px', marginBottom: '5%' }}>
                    <div className="card-body" >
                        <div className="row">
                            {this.state?.dates?.length > 0 && this.state.dates.map((item, index) =>
                                <div className="col-sm-6 mb-5" key={index}>
                                    {item.status && item.status === 'Post' &&
                                        <div className="card " style={{ maxWidth: '50rem', margin: 'auto', padding: '10px', borderRadius: '23px', background: '#ffffff', boxShadow: '5px 5px 34px #737373,-5px -5px 34px #ffffff' }}>
                                            <div className="text-center">
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="card-body">
                                                <h3 className="card-title text-center text-capitalize">{item.submitDate}</h3>
                                                <p className="card-text" style={{ fontSize: "20px" }}>
                                                    <span className="fw-bold">Due date : </span>{item.dueDate}<br />
                                                    <span className="fw-bold">Details : </span>{item.description}
                                                </p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ImportantDatedsBody;