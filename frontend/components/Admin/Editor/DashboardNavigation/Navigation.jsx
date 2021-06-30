import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card" style={{ background: '#f5f5f5', borderRadius: '10px', boxShadow: '19px 19px 38px #939393, -19px -19px 38px #ffffff' }}>
                            <div class="card-body">
                                <button type="button" class="btn btn-light"><a href='/editor-home' style={{ fontSize: "20px", color: 'black' }}>Editor Home</a></button>
                                <button type="button" class="btn btn-light"><a href='/vieworg' style={{ fontSize: "20px", color: 'black' }}>Organizing Committee</a></button>
                                <button type="button" class="btn btn-light"><a href='/viewtech' style={{ fontSize: "20px", color: 'black' }}>Technical Committee</a></button>
                                <button type="button" class="btn btn-light"><a href='/viewimpdate' style={{ fontSize: "20px", color: 'black' }}>Important Dates</a></button>
                                <button type="button" class="btn btn-light"><a href='/viewkeynote' style={{ fontSize: "20px", color: 'black' }}>Key Note Speakers</a></button>
                                <button type="button" class="btn btn-light" ><a href='/viewguest' style={{ fontSize: "20px", color: 'black' }} >Guest Speakers</a></button>
                                <button type="button" class="btn btn-light"><a href='/viewpast' style={{ fontSize: "20px", color: 'black' }}>Past Proceeding</a></button>
                                <button type="button" class="btn btn-light"><a href='/viewaboutus' style={{ fontSize: "20px", color: 'black' }}>About Us</a></button>
                                <button type="button" class="btn btn-light" ><a href='/Admin_dashbord' style={{ fontSize: "20px", color: 'black' }}>LogOut</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;