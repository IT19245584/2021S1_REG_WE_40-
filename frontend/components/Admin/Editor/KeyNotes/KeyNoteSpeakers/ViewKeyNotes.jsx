import React, { Component } from 'react';
import axios from 'axios';

class ViewKeynoteSpeaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guest: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/keynoteSpeaker/view')
            .then(response => {
                const guest = response.data;
                this.setState({ guest });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    render() {
        return (
            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <h1 tag='div' className='display-3 pb-3 mb-3 border-bottom'>Keynote Speakers</h1>
                </div>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '120rem', margin: 'auto', padding: '10px' }}>
                    <div className="card-body" >
                        <div className="row">
                            <table className="table table-success table-striped">
                                <thead className="table-info" >
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Profession</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                {this.state?.guest?.length > 0 && this.state.guest.map((item, index) =>
                                    <tbody key={index}>
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.image}</td>
                                            <td>{item.profession}</td>
                                            <td>{item.description}</td>
                                            <td>{item.status}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <button type="button" class="btn btn-warning">Edit</button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewKeynoteSpeaker;