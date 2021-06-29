import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navigation from '../DashboardNavigation/Navigation';

class ViewAboutUs extends Component {
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
        this.updateAboutus = this.updateAboutus.bind(this);
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

    deleteData(id) {
        axios.delete('http://localhost:6060/aboutus/delete/' + id)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "About Us Deleting Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/viewaboutus";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "About Us Deleting Not Success",
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

    updateAboutus(id, description, dateRange, conferenceStart, conferenceEnd, conferenceWebsite, organizerPhone, organizerEmail, organizerWebsite, status) {
        reactLocalStorage.setObject("Aboutus", [id, description, dateRange, conferenceStart, conferenceEnd, conferenceWebsite, organizerPhone, organizerEmail, organizerWebsite, status]);
        window.location.href = "/updateaboutus";
    }

    render() {
        return (
            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                    <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>About Us</h1>
                </div>
                <Navigation/>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                    <div className="card-body" >
                        <div className="row">
                            <table className="table table-success table-striped">
                                <thead className="table-info" >
                                    <tr>
                                        <th scope="col">About Us</th>
                                        <th scope="col">Conference Date range</th>
                                        <th scope="col">Conference Start Date</th>
                                        <th scope="col">Conference End Date</th>
                                        <th scope="col">Conference Website</th>
                                        <th scope="col">Organizer Phone</th>
                                        <th scope="col">Organizer Email</th>
                                        <th scope="col">Organizer Website</th>
                                        <th scope="col">Organizer Status</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                {this.state?.dates?.length > 0 && this.state.dates.map((item, index) =>
                                    <tbody key={index}>
                                        <tr>
                                            <td>{item.description}</td>
                                            <td>{item.dateRange}</td>
                                            <td>{item.conferenceStart}</td>
                                            <td>{item.conferenceEnd}</td>
                                            <td>{item.conferenceWebsite}</td>
                                            <td>{item.organizerPhone}</td>
                                            <td>{item.organizerEmail}</td>
                                            <td>{item.organizerWebsite}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <button type="button" className="btn btn-warning"
                                                    onClick={() => this.updateAboutus(item._id, item.description, item.dateRange, item.conferenceStart, item.conferenceEnd, item.conferenceWebsite, item.organizerPhone, item.organizerEmail, item.organizerWebsite, item.status)}>Edit</button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-danger"
                                                    onClick={() => this.deleteData(item._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ViewAboutUs;