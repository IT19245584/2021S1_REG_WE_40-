import React, { Component } from 'react';
import Img from 'url:../../src/Images/Editor/Editor1.png';

class EditorDashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Welcome Editor</h1>
                    </div>
                </div>
                
                <div>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card card border border-light shadow-0 mb-3" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                                <div class="card-body d-grid gap-2 col-6 mx-auto">
                                    <div class="btn-group" role="group" style={{ marginBottom: "15%", marginTop: "10%" }}>
                                        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Organizing Committee</a>
                                    </div>
                                    <div class="btn-group" role="group" style={{ marginBottom: "15%" }}>
                                        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Technical Committee</a>
                                    </div>
                                    <div class="btn-group" role="group" style={{ marginBottom: "15%" }}>
                                        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Important Dates</a>
                                    </div>
                                    <div class="btn-group" role="group" style={{ marginBottom: "15%" }}>
                                        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Key Notes</a>
                                    </div>
                                    <div class="btn-group" role="group" style={{ marginBottom: "15%" }}>
                                        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Past Proceeding</a>
                                    </div>
                                    <div class="btn-group" role="group" >
                                        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">About Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card border border-light shadow-0 mb-3" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                                <img
                                    src={Img}
                                    class="card-img-bottom"
                                    alt="Editor"
                                    style={{ maxHeight: "800px" }}
                                />
                                <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">LogOut</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default EditorDashboard;