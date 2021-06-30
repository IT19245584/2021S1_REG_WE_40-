import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class AddImportantDates extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            submitDate: '',
            dueDate: '',
            description: '',
            status: 'Pending',
            admin:[]
        }
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        let ImportantDates = {
            name: this.state.name,
            submitDate: this.state.submitDate,
            dueDate: this.state.dueDate,
            description: this.state.description,
            status: this.state.status
        }
        console.log('Data', ImportantDates);
        axios.post('http://localhost:6060/importantDates/add', ImportantDates)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Add Successed!",
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
                    text: "Not Success",
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
            })
    }
    componentDidMount() {
        axios.get('http://localhost:6060/admin_side_user/searchUser')
            .then(response => {
                const admin = response.data;
                this.setState({ admin });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    render() {
        const admin = this.state.admin;
        return (
            
            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                    <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Add Important Dates</h1>
                </div>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', borderRadius: '8px' }}>
                    <div className="row g-0">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-outline mb-4">
                                Name: <input type="text" id="name" className="form-control border border-dark mb-3" name="name" value={this.state.name} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Submission starting date: <input type="text" id="submitDate" className="form-control border border-dark mb-3" name="submitDate" value={this.state.submitDate} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Due Date: <input type="text" className="form-control border border-dark mb-3" id="dueDate" rows="4" name="dueDate" value={this.state.dueDate} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Description: <textarea className="form-control border border-dark mb-3" id="description" rows="4" name="description" value={this.state.description} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Status:
                                {admin.type === "Admin" ?
                                    <select className="form-select" aria-label="Default select example" disabled={false} id="status" name="status" value={this.state.status} onChange={this.onChange}>
                                        <option selected>Pending</option>
                                        <option>Post</option>
                                        <option>Rejected</option>
                                    </select> :
                                    <select className="form-select" aria-label="Default select example" disabled={true} id="status" name="status" value={this.state.status} onChange={this.onChange}>
                                        <option selected>Pending</option>
                                        <option>Post</option>
                                        <option>Rejected</option>
                                    </select>
                                }
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddImportantDates;