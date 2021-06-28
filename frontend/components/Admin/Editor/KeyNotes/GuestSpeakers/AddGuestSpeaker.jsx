import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class AddGuestSpeaker extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            image: '',
            profession: '',
            description: '',
            status: 'Pending'
        }
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    // onSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("file", this.state.image);
    //     formData.append("upload_preset", "ml_default");

    //     axios.post("https://api.cloudinary.com/v1_1/applicationframework2021/image/upload", formData).then((response) => {
    //         console.log(image)
    //         const image = this.state.image.name;

    //         const GuestSpeaker = {
    //             name: this.state.name,
    //             image,
    //             profession: this.state.profession,
    //             description: this.state.description,
    //             status: this.state.status
    //         };

    //         axios.post('http://localhost:6060/guestSpeaker/add', GuestSpeaker)
    //             .then(() => {
    //                 Swal.fire({
    //                     title: "Success!",
    //                     text: "Adding Successed!",
    //                     icon: 'success',
    //                     confirmButtonText: "OK",
    //                     type: "success"
    //                 }).then(okay => {
    //                     if (okay) {
    //                         window.location.href = "/viewguest";
    //                     }
    //                 });

    //             }).catch((err) => {
    //                 Swal.fire({
    //                     title: "error!",
    //                     text: "Adding Not Success",
    //                     icon: 'error',
    //                     position: 'center',
    //                     showConfirmButton: false,
    //                     timer: 2000,
    //                     timerProgressBar: true,
    //                     didOpen: (toast) => {
    //                         toast.addEventListener('mouseenter', Swal.stopTimer)
    //                         toast.addEventListener('mouseleave', Swal.resumeTimer)
    //                     }
    //                 });
    //             })
    //     })
    // }


    onSubmit(e) {
            e.preventDefault();
            let GuestSpeaker = {
                name: this.state.name,
                image: this.state.image,
                profession: this.state.profession,
                description: this.state.description,
                status: this.state.status
            }
        console.log('Data', GuestSpeaker);
            axios.post('http://localhost:6060/guestSpeaker/add', GuestSpeaker)
                .then(response => {
                    alert("Data successfully inserted")
                }).catch(error => {
                    console.log(error.message);
                    alert(error.message)
                })
        };

    render() {
        return (
            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                    <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Add Guest Speakers</h1>
                </div>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', background:'#fdf4c9', borderRadius:'8px',boxShadow:'inset 6px 6px 13px #f7ebde, inset -6px -6px 13px #fff9ec' }}>
                    <div className="row g-0">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-outline mb-4">
                                Name: <input type="text" id="name" className="form-control border border-dark mb-3" name="name" value={this.state.name} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" for="customFile">Add Image</label>
                                <input type="file" className="form-control" id="image" name="image" value={this.state.image} onChange={this.onChange} required />

                            </div>
                            <div className="form-outline mb-4">
                                Profession: <input type="text" id="profession" className="form-control border border-dark mb-3" name="profession" value={this.state.profession} onChange={this.onChange} required />

                            </div>
                            <div className="form-outline mb-4">
                                Description: <textarea className="form-control border border-dark mb-3" id="description" rows="4" name="description" value={this.state.description} onChange={this.onChange} required />

                            </div>
                            <div className="form-outline mb-4">
                                Status:
                                <select className="form-select" aria-label="Default select example" id="status" name="status" value={this.state.status} onChange={this.onChange}>
                                    <option selected>Pending</option>
                                    <option>Post</option>
                                    <option>Rejected</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default AddGuestSpeaker;