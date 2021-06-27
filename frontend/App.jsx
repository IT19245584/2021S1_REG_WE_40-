import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/assert/css/Editor/editor.css';
import Index from './components/LandingPage/index';

import Reviewer_WorkShop_ViewTable from './components/Admin/Reviewer/reviewer_workshop_view_table';
import Reviewer_WorkShop_ViewOne from './components/Admin/Reviewer/reviewer_workshop_view_one';
import Reviewer_ResearchPaper_ViewTable from './components/Admin/Reviewer/reviewer_researchpaper_view_table';
import Reviewer_ResearchPaper_ViewOne from './components/Admin/Reviewer/reviewer_researchpaper_view_one';
import Reviewer_ResearchPaper_Edit from './components/Admin/Reviewer/reviewer_researchpaper_edit';


function App() {
  return (
  <div>
       <Router>
            <Switch>
                <Route exact path="/">
                    <Index/>
                </Route>
                <Route path="/view-all-ws" component={Reviewer_WorkShop_ViewTable} />
                <Route path="/view-all-rp" component={Reviewer_ResearchPaper_ViewTable} />
                <Route path="/edit-researchpaper" component={Reviewer_ResearchPaper_Edit} />

                <Route path="/view-ws" component={Reviewer_WorkShop_ViewOne} />
                
                <Route path="/view-researchpaper" component={Reviewer_ResearchPaper_ViewOne} />
                
            </Switch>
      </Router>

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
import AddAboutUs from './components/Admin/Editor/AboutUs/AddAboutUs';
import AddImportantDates from './components/Admin/Editor/ImportantDates/AddImportantDates';
import AddKeyNotes from './components/Admin/Editor/KeyNotes/KeyNoteSpeakers/AddKeyNotes';
import AddGuestSpeaker from './components/Admin/Editor/KeyNotes/GuestSpeakers/AddGuestSpeaker';
import ViewImportantDates from './components/Admin/Editor/ImportantDates/ViewImportantDates';
import ViewGuestSpeaker from './components/Admin/Editor/KeyNotes/GuestSpeakers/ViewGuestSpeaker';
import ViewKeynoteSpeaker from './components/Admin/Editor/KeyNotes/KeyNoteSpeakers/ViewKeyNotes';

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
                    <Route exact path='/about'><AboutUs /></Route>
                    <Route exact path='/date'><ImportantDate /></Route>
                    <Route exact path='/past'><PastProceeding /></Route>

                    {/* Editor Pages */}
                    <Route exact path='/edhome'><EditorDashboard /></Route>
                    <Route exact path='/addorg'><AddOrg /></Route>
                    <Route exact path='/addtec'><AddTec /></Route>
                    <Route exact path='/addabout'><AddAboutUs/></Route>
                    <Route exact path='/adddate'><AddImportantDates/></Route>
                    <Route exact path='/addkeynote'><AddKeyNotes/></Route>
                    <Route exact path='/addguest'><AddGuestSpeaker/></Route>
                    <Route exact path='/viewimpdate'><ViewImportantDates/></Route>
                    <Route exact path='/viewguest'><ViewGuestSpeaker/></Route>
                    <Route exact path='/viewkeynote'><ViewKeynoteSpeaker/></Route>


                </Switch>
            </Router>
        </div>
    );
}

export default App;


