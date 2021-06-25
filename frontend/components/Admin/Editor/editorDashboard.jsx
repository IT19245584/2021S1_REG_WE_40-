import React, { Component } from 'react';
import Img from 'url:../../assert/Images/Editor/Editor1.png';

class EditorDashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <div classNameName="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <h1 tag='div' classNameName='display-1 pb-3 mb-3 border-bottom'>Welcome Editor</h1>
                    </div>
                </div>
                
                <div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                                <div className="card-body d-grid gap-2 col-6 mx-auto">
                                    <div className="btn-group" role="group" style={{ marginBottom: "15%", marginTop: "10%" }}>
                                        <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Organizing Committee</a>
                                    </div>
                                    <div className="btn-group" role="group" style={{ marginBottom: "15%" }}>
                                        <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Technical Committee</a>
                                    </div>
                                    <div className="btn-group" role="group" style={{ marginBottom: "15%" }}>
                                        <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Important Dates</a>
                                    </div>
                                    <div className="btn-group" role="group" style={{ marginBottom: "15%" }}>
                                        <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Key Notes</a>
                                    </div>
                                    <div className="btn-group" role="group" style={{ marginBottom: "15%" }}>
                                        <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Past Proceeding</a>
                                    </div>
                                    <div className="btn-group" role="group" >
                                        <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">About Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                                <img
                                    src={Img}
                                    className="card-img-bottom"
                                    alt="Editor"
                                    style={{ maxHeight: "800px" }}
                                />
                                <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">LogOut</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default EditorDashboard;