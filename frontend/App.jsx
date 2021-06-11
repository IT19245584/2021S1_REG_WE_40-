import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/LandingPage/index';
import OrganizingCommittee from './components/LandingPage/Committee/OrganizingCommittee';
import TechnicalCommittee from './components/LandingPage/Committee/TechnicalCommittee';
import ContactUs from './components/LandingPage/ContactUs/ContactUs';
import KeyNotes from './components/LandingPage/KeyNotes/Keynotes';
import AboutUs from './components/LandingPage/AboutUs/AboutUs';
import EditorDashboard from './components/Admin/Editor/EditorDashboard';
import ImportantDate from './components/LandingPage/ImportantDates/ImportantDates';
import PastProceeding from './components/LandingPage/PastProceeding/PastProceeding';
import AddOrg from './components/Admin/Editor/Committee/OrganizingCommittee/AddOrganizingCommittee';
import AddTec from './components/Admin/Editor/Committee/TechnicalCommittee/AddTechnicalCommittee';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {/* Landing Pages */}
                    <Route exact path="/"><Index /></Route>
                    <Route exact path='/org'><OrganizingCommittee /></Route>
                    <Route exact path='/tec'><TechnicalCommittee /></Route>
                    <Route exact path='/contact'><ContactUs /></Route>
                    <Route exact path='/keynote'><KeyNotes /></Route>
                    <Route exact path='/about'><AboutUs/></Route>
                    <Route exact path='/date'><ImportantDate/></Route>
                    <Route exact path='/past'><PastProceeding/></Route>

                    {/* Editor Pages */}
                    <Route exact path='/edhome'><EditorDashboard/></Route>
                    <Route exact path='/addorg'><AddOrg/></Route>
                    <Route exact path='/addtec'><AddTec/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;


