import React, { Component } from 'react';
import Guest from './GuestSpeaker';
import Keynote from './KeynoteSpeaker';

class KeynoteBody extends Component {
    render() {
        return (
            <div>
                <Keynote />
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <h1 tag='div' className='display-3 pb-3 mb-3 border-bottom'>Guest Speakers</h1>
                </div>
                <Guest />
            </div>
        );
    }
}

export default KeynoteBody;