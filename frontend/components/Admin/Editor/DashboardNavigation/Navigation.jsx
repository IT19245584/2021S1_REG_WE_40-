import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <button type="button" class="btn btn-outline-danger"><a href='#'>Organizing Committee</a></button>
                <button type="button" class="btn btn-outline-danger"><a href='#'>Technical Committee</a></button>
                <button type="button" class="btn btn-outline-danger"><a href='/viewimpdate'>Important Dates</a></button>
                <button type="button" class="btn btn-outline-danger"><a href='/viewkeynote'>Key Note Speakers</a></button>
                <button type="button" class="btn btn-outline-danger" ><a href='/viewguest'>Guest Speakers</a></button>
                <button type="button" class="btn btn-outline-danger"><a href='#'>Past Proceeding</a></button>
                <button type="button" class="btn btn-outline-danger"><a href='#'>About Us</a></button>
            </div>
        );
    }
}

export default Navigation;