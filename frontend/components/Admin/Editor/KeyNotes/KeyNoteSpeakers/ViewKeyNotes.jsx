import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navigation from '../../DashboardNavigation/Navigation';

class ViewKeynoteSpeaker extends Component {
    constructor(props) {
        super(props);
        this.updateKeyNoteSpeaker = this.updateKeyNoteSpeaker.bind(this);
        this.deleteData = this.deleteData.bind(this);
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

    deleteData(id) {
        axios.delete('http://localhost:6060/keynoteSpeaker/delete/' + id)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Important dates Deleting Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/viewkeynote";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Important dates Deleting Not Success",
                    icon: 'error',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
            });
    }

    updateKeyNoteSpeaker(id, name, profession, description, status, image) {
        reactLocalStorage.setObject("KeynoteSpeaker", [id, name, profession, description, status, image]);
        window.location.href = "/update-keynote-speaker";
    }

    render() {
        return (
            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <h1 tag='div' className='display-3 pb-3 mb-3 border-bottom'>Keynote Speakers</h1>
                </div>
                <Navigation />
                <div className="container">
                    <a href="/addkeynote">
                        <div className="text-end mb-4">
                            <button type="button" class="btn btn-secondary btn-sm">+ Add New KeyNote Speaker</button>
                        </div>
                    </a>
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
                                                <button type="button" class="btn btn-warning"
                                                    onClick={() => this.updateKeyNoteSpeaker(item._id, item.name, item.image, item.profession, item.description, item.status)}>Edit</button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-danger"
                                                    onClick={() => this.deleteData(item._id)}>Delete</button>
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