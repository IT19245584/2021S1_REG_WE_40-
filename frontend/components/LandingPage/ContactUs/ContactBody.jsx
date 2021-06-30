import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class ContactBody extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            sent: false
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        let Contact = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        axios.post('http://localhost:6060/contactdata', Contact)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "You Message sent. We will contact you soon",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "#";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: "Unable to send message",
                    icon: 'error',
                    confirmButtonText: "OK",
                    type: "success"
                })
            })
    }

    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            sent: false
        })
    };

    render() {
        return (
            <div data-testid="contact-1" className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div style={{ height: '300px' }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100 border border-dark mb-3" style={{ borderRadius: '33px', background: 'linear-gradient(225deg, #e4e4d4, #fffffd)', boxShadow: '18px 18px 100px #7c7c74,-18px -18px 100px #ffffff' }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Address</h5>
                                    <p className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SLIIT, New Kandy Road, Malabe, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border border-dark mb-3" style={{ borderRadius: '33px', background: 'linear-gradient(225deg, #e4e4d4, #fffffd)', boxShadow: '18px 18px 100px #7c7c74,-18px -18px 100px #ffffff' }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Phone Number</h5>
                                    <p className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>+94 11 7544806</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border border-dark mb-3" style={{ borderRadius: '33px', background: 'linear-gradient(225deg, #e4e4d4, #fffffd)', boxShadow: '18px 18px 100px #7c7c74,-18px -18px 100px #ffffff' }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Email</h5>
                                    <p className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>info@sliit.lk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col" style={{ borderRadius: '33px', background: 'linear-gradient(225deg, #e6d6c5, #ffffea)', boxShadow: '18px 18px 100px #7d756b,-18px -18px 100px #ffffff' }}>
                        <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "60px" }}>Contact Us for More Details</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-outline mb-4">
                                Name: <input type="text" id="name" className="form-control border border-dark mb-3" name="name" value={this.state.name} onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                Email: <input data-testid="email-input" type="email" id="email" className="form-control border border-dark mb-3" name="email" value={this.state.email} onChange={this.onChange} required />
                                {this.state.email && !(/\S+@\S+\.\S+/).test(this.state.email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}
                            </div>
                            <div className="form-outline mb-4">
                                Subject: <input type="text" className="form-control border border-dark mb-3" id="subject" name="subject" value={this.state.subject} onChange={this.onChange} />
                            </div>
                            <div className="form-outline mb-4">
                                Message: <textarea className="form-control border border-dark mb-3" id="message" rows="4" name="message" value={this.state.message} onChange={this.onChange} required />
                            </div>
                            <center><button type="submit" className="btn btn-outline-danger btn-block mb-4">Send</button></center>
                        </form>
                    </div>
                    <div className="col">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985117158014!2d79.9729445!3d6.9146775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1622003456353!5m2!1sen!2slk"
                            style={{ minWidth: "600px", maxWidth: "600px", height: "500px" }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }} />
                </div>
            </div>
        );
    }
}

export default ContactBody;