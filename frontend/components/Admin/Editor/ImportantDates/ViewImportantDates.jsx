import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navigation from '../DashboardNavigation/Navigation';

class ViewImportantDates extends Component {
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
        this.updateImportantDates = this.updateImportantDates.bind(this);
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

    deleteData(id) {
        axios.delete('http://localhost:6060/importantDates/delete/' + id)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Important dates Deleting Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/viewimpdate";
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

    updateImportantDates(id, name, submitDate, dueDate, description, status) {
        reactLocalStorage.setObject("ImportantDates", [id, name, submitDate, dueDate, description, status]);
        window.location.href = "/updateimpdate";
    }

    render() {
        return (
            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                    <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Important Dates</h1>
                </div>
                <Navigation />
                <div className="container">
                    <a href="/adddate">
                        <div className="text-end mb-4">
                            <button type="button" class="btn btn-secondary btn-sm">+ Add New Important Date</button>
                        </div>
                    </a>
                </div>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                    <div className="card-body" >
                        <div className="row">
                            <table className="table table-success table-striped">
                                <thead className="table-info" >
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Submission Date</th>
                                        <th scope="col">Due Date</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                {this.state?.dates?.length > 0 && this.state.dates.map((item, index) =>
                                    <tbody key={index}>
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.submitDate}</td>
                                            <td>{item.dueDate}</td>
                                            <td>{item.description}</td>
                                            <td>{item.status}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <button type="button" className="btn btn-warning"
                                                    onClick={() => this.updateImportantDates(item._id, item.name, item.submitDate, item.dueDate, item.description, item.status)}>Edit</button>
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

export default ViewImportantDates;