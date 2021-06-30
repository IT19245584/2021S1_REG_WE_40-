import React, { Component } from 'react';
import axios from 'axios';

class KeynoteSpeaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyNote: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/keynoteSpeaker/view')
            .then(response => {
                const keyNote = response.data;
                this.setState({ keyNote });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    render() {
        return (
            <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                <div className="card-body" >
                    <div className="row">
                        {this.state?.keyNote?.length > 0 && this.state.keyNote.map((item, index) =>
                            <div className="col-sm-6 mb-5" key={index} style={{ boxShadow: '5px 5px 10px #b2aeb1, -5px -5px 10px #ffffff' }}>
                                {item.status && item.status === 'Post' &&
                                    <div>
                                        <h3 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '35px' }}>{item.name}</h3>
                                        <br></br>
                                        <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                            <div className="card-body  hover-zoom" style={{ maxWidth: '20rem', margin: '0 auto', padding: '10px', position: 'relative' }}>
                                                <img src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + item.image} className="img-fluid rounded-circle hover-shadow" />
                                            </div>
                                        </div>
                                        <br></br>
                                        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px' }}>{item.profession}</h2>
                                        <div className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                                            <p>{item.description}</p>

                                        </div>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default KeynoteSpeaker;