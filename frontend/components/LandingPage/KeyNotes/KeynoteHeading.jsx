import React, { Component } from 'react';

class KeynoteHeading extends Component {
    state = {}
    render() {
        return (
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Keynote Speakers</h1>
            </div>
        );
    }
}
export default KeynoteHeading;