import React, { Component } from 'react';

class AddOrganizingCommittee extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                    <div class="row g-0">

                        <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "60px" }}>Add Organizing Committee</h3>
                        <form>
                            <div class="form-outline mb-4">
                                Name: <input type="text" id="form4Example1" class="form-control border border-dark mb-3" required />
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="customFile">Add Image</label>
                                <input type="file" class="form-control" id="customFile" required />

                            </div>
                            <div class="form-outline mb-4">
                                Department: <input type="text" id="form4Example2" class="form-control border border-dark mb-3" required />

                            </div>
                            <div class="form-outline mb-4">
                                Description: <textarea class="form-control border border-dark mb-3" id="form4Example4" rows="4" required />

                            </div>
                            <div class="form-outline mb-4">
                                Status:
                                    <select className="form-select" aria-label="Default select example">
                                    <option selected>Pending</option>
                                    <option>Post</option>
                                    <option>Rejected</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block mb-4">Save</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddOrganizingCommittee;