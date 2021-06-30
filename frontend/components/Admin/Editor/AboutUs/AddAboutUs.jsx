import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class AddAboutUs extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            description: '',
            dateRange: '',
            conferenceStart: '',
            conferenceEnd: '',
            conferenceWebsite: '',
            organizerPhone: '',
            organizerEmail: '',
            organizerWebsite: '',
            status: 'Pending',
            admin: []
        }
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        let AddAboutUs = {
            description: this.state.description,
            dateRange: this.state.dateRange,
            conferenceStart: this.state.conferenceStart,
            conferenceEnd: this.state.conferenceEnd,
            conferenceWebsite: this.state.conferenceWebsite,
            organizerPhone: this.state.organizerPhone,
            organizerEmail: this.state.organizerEmail,
            organizerWebsite: this.state.organizerWebsite,
            status: this.state.status
        }
        console.log('Data', AddAboutUs);
        axios.post('http://localhost:6060/aboutus/add', AddAboutUs)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Added Successed!",
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

    render() {
        const admin = this.state.admin;
        return (

            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                    <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Add About US Details</h1>
                </div>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                    <div className="row g-0">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-outline mb-4">
                                Description: <textarea id="description" className="form-control border border-dark mb-3" rows="4" name="description" value={this.state.description} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                dateRange of conference: <input type="text" id="dateRange" className="form-control border border-dark mb-3" name="dateRange" value={this.state.dateRange} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Conference Starting date: <input type="text" id="conferenceStart" className="form-control border border-dark mb-3" name="conferenceStart" value={this.state.conferenceStart} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Conference End date: <input type="text" id="conferenceEnd" className="form-control border border-dark mb-3" name="conferenceEnd" value={this.state.conferenceEnd} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Website of Conference: <input type="text" id="conferenceWebsite" className="form-control border border-dark mb-3" name="conferenceWebsite" value={this.state.conferenceWebsite} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Organizing committee phone number: <input type="text" id="organizerPhone" className="form-control border border-dark mb-3" name="organizerPhone" value={this.state.organizerPhone} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Email of Organizing committee: <input type="text" id="organizerEmail" className="form-control border border-dark mb-3" name="organizerEmail" value={this.state.organizerEmail} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Website of Organizing committee: <input type="text" id="organizerWebsite" className="form-control border border-dark mb-3" name="organizerWebsite" value={this.state.organizerWebsite} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Status:
                                <select className="form-select" aria-label="Default select example" disabled={false} id="status" name="status" value={this.state.status} onChange={this.onChange}>
                                    <option selected>Pending</option>
                                    <option>Post</option>
                                    <option>Rejected</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAboutUs;