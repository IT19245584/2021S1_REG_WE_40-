import React, { Component } from 'react';
import axios from 'axios';

class PastProceedingImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/pastProceeding/view')
            .then(response => {
                const data = response.data;
                this.setState({ data });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '8%', marginBottom: '2%' }}>
                <div className="text-center container">
                    <div className="card-group" >
                        {this.state?.data?.length > 0 && this.state.data.map((item, index) =>
                            <div className="card" key={index}>
                                {item.status && item.status === 'Post' &&
                                    <div>
                                        <img src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + item.image} className="card-img-top" alt="..." />
                                        <p>{item.description}</p>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                </div>
            </div>
        );
    }
}

export default PastProceedingImages;