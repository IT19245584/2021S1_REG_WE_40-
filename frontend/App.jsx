import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/LandingPage/index';
import OrganizingCommittee from './components/LandingPage/Committee/OrganizingCommittee';
import TechnicalCommittee from './components/LandingPage/Committee/TechnicalCommittee';
import ContactUs from './components/LandingPage/ContactUs/ContactUs';
import KeyNotes from './components/LandingPage/KeyNotes/Keynotes';
import AboutUs from './components/LandingPage/AboutUs/AboutUs';


function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/"><Index /></Route>
                    <Route exact path='/org'><OrganizingCommittee /></Route>
                    <Route exact path='/tec'><TechnicalCommittee /></Route>
                    <Route exact path='/contact'><ContactUs /></Route>
                    <Route exact path='/keynote'><KeyNotes /></Route>
                    <Route exact path='/about'><AboutUs/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;


