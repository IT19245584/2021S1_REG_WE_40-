import React, { Component } from 'react';
import axios from 'axios';

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

    onSubmit(e) {
        e.preventDefault();
        let KeyNotes = {
            name: this.state.name,
            image: this.state.image,
            profession: this.state.profession,
            description: this.state.description,
            status: this.state.status
        }
        console.log('Data', KeyNotes);
        axios.post('http://localhost:6060/orgCommittee/addOrgCommittee', KeyNotes)
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
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
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
            </div>
        );
    }
}

export default AddGuestSpeaker;