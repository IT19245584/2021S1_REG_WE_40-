import React, { Component } from 'react';
import axios from 'axios';

class AddTechnicalCommittee extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            image: '',
            department: '',
            description: '',
            status: 'Pending'
        }
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        let TechnicalCommittee = {
            name: this.state.name,
            image: this.state.image,
            department: this.state.department,
            description: this.state.description,
            status: this.state.status
        }
        console.log('Data', TechnicalCommittee);
        axios.post('http://localhost:6060/techCommittee/addTecCommittee', TechnicalCommittee)
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
                    <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Add Technical Committee</h1>
                </div>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                    <div className="row g-0">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-outline mb-4">
                                Name: <input type="text" id="name" className="form-control border border-dark mb-3" vlaue={this.state.name} name="name" onChange={this.onChange} required />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlfor="customFile">Add Image</label>
                                <input type="file" className="form-control" id="image" value={this.state.image} name="image" onChange={this.onChange} required />

                            </div>
                            <div className="form-outline mb-4">
                                Department: <input type="text" id="department" className="form-control border border-dark mb-3" value={this.state.department} name="department" onChange={this.onChange} required />

                            </div>
                            <div className="form-outline mb-4">
                                Description: <textarea className="form-control border border-dark mb-3" id="description" rows="4" value={this.state.description} name="description" onChange={this.onChange} required />

                            </div>
                            <div className="form-outline mb-4">
                                Status:
                                <select className="form-select" aria-label="Default select example" id="status" value={this.state.status} name="status" onChange={this.onChange}>
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

export default AddTechnicalCommittee;