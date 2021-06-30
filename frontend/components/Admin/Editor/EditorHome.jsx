import React, { Component } from 'react';
import Imgs from 'url:../../assert/Images/Editor/EditorOrange.png';
import Navigation from './DashboardNavigation/Navigation';

class EditorHome extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Welcome Editor</h1>
                    </div>
                </div>
                <Navigation />
                <div  style={{maxHeight:'50%',maxWidth:'50%', display: 'flex', justifyContent: 'center',alignItems: 'center', marginLeft:'25%'}}>
                    <div class="card mb-3">
                        <img src={Imgs} class="card-img-top" alt="Editor Home" />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditorHome;