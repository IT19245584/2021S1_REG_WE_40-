import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/assert/css/Editor/editor.css';
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
import AddAboutUs from './components/Admin/Editor/AboutUs/AddAboutUs';
import AddImportantDates from './components/Admin/Editor/ImportantDates/AddImportantDates';
import AddKeyNotes from './components/Admin/Editor/KeyNotes/KeyNoteSpeakers/AddKeyNotes';
import AddGuestSpeaker from './components/Admin/Editor/KeyNotes/GuestSpeakers/AddGuestSpeaker';
import ViewImportantDates from './components/Admin/Editor/ImportantDates/ViewImportantDates';
import ViewGuestSpeaker from './components/Admin/Editor/KeyNotes/GuestSpeakers/ViewGuestSpeaker';
import ViewKeynoteSpeaker from './components/Admin/Editor/KeyNotes/KeyNoteSpeakers/ViewKeyNotes';

import Reviewer_WorkShop_ViewTable from './components/Admin/Reviewer/reviewer_workshop_view_table';
import Reviewer_WorkShop_ViewOne from './components/Admin/Reviewer/reviewer_workshop_view_one';
import Reviewer_ResearchPaper_ViewTable from './components/Admin/Reviewer/reviewer_researchpaper_view_table';
import Reviewer_ResearchPaper_Edit from './components/Admin/Reviewer/reviewer_researchpaper_edit';

import Admin_dashbord from './components/Admin/Admin/admin_dashaboard.jsx';
import Admin_BudjectView from './components/Admin/Admin/admin_BujectView.jsx';
import Admin_side_login from './components/Admin/login';
import Admin_side_registration from './components/Admin/registration';
import Admin_side_Wait from './components/Admin/waitPage';
import Admin_side_pass_rest from './components/Admin/resetPassword';


import Reviewer_WorkShop_ViewTable from './components/Admin/Reviewer/Workshop/reviewer_workshop_view_table';
import Reviewer_WorkShop_ViewOne from './components/Admin/Reviewer/Workshop/reviewer_workshop_view_one';
import Reviewer_Workshop_Edit from './components/Admin/Reviewer/Workshop/reviewer_workshop_edit';

import Reviewer_ResearchPaper_ViewTable from './components/Admin/Reviewer/ResearchPaper/reviewer_researchpaper_view_table';
import Reviewer_ResearchPaper_Edit from './components/Admin/Reviewer/ResearchPaper/reviewer_researchpaper_edit';
import Reviewer_ResearchPaper_ViewTable from './components/Admin/Reviewer/ResearchPaper/reviewer_researchpaper_view_table';
import Reviewer_ResearchPaper_Edit from './components/Admin/Reviewer/ResearchPaper/reviewer_researchpaper_edit';
import ReviewerDashboard from './components/Admin/Reviewer/reviewer_dashboard';

import ViewOrgCommittee from './components/Admin/Editor/Committee/OrganizingCommittee/ViewOrganizingCommittee';
import ViewTechCommittee from './components/Admin/Editor/Committee/TechnicalCommittee/ViewTechnicalCommittee';
import UpdateOrgCommittee from './components/Admin/Editor/Committee/OrganizingCommittee/UpdateOrganizingCommittee';
import UpdateTechCommittee from './components/Admin/Editor/Committee/TechnicalCommittee/UpdateTechnicalCommittee';


function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {/* Landing Pages / User pages */}
                    <Route exact path="/"><Index /></Route>
                    <Route exact path='/org'><OrganizingCommittee /></Route>
                    <Route exact path='/tec'><TechnicalCommittee /></Route>
                    <Route exact path='/contact'><ContactUs /></Route>
                    <Route exact path='/keynote'><KeyNotes /></Route>
                    <Route exact path='/about'><AboutUs /></Route>
                    <Route exact path='/date'><ImportantDate /></Route>
                    <Route exact path='/past'><PastProceeding /></Route>


                    {/* Admin side Pages */}
                    <Route exact path='/edhome'><EditorDashboard /></Route>
                    <Route exact path='/addorg'><AddOrg /></Route>
                    <Route exact path='/addtec'><AddTec /></Route>
                    <Route exact path='/addabout'><AddAboutUs /></Route>
                    <Route exact path='/adddate'><AddImportantDates /></Route>
                    <Route exact path='/addkeynote'><AddKeyNotes /></Route>
                    <Route exact path='/addguest'><AddGuestSpeaker /></Route>
                    <Route exact path='/viewimpdate'><ViewImportantDates /></Route>
                    <Route exact path='/viewguest'><ViewGuestSpeaker /></Route>
                    <Route exact path='/viewkeynote'><ViewKeynoteSpeaker /></Route>
                    <Route exact path='/vieworg'><ViewOrgCommittee /></Route>
                    <Route exact path='/viewtech'><ViewTechCommittee/></Route>
                    <Route exact path='/updateorg'><UpdateOrgCommittee/></Route>
                    <Route exact path='/updatetech'><UpdateTechCommittee/></Route>


                    {/* Admin Pages */}
                    <Route exact path="/Admin_dashbord"><Admin_dashbord /></Route>
                    <Route exact path="/Admin_side_login"><Admin_side_login /></Route>
                    <Route exact path="/Admin_side_registration"><Admin_side_registration /></Route>
                    <Route exact path="/Admin_side_Wait"><Admin_side_Wait /></Route>
                    <Route exact path="/Admin_side_pass_rest"><Admin_side_pass_rest /></Route>
                    
                    {/* Reviewer's pages */}
                    <Route path="/dashboard" exact component={ReviewerDashboard} />
                    <Route path="/view-all-ws" exact component={Reviewer_WorkShop_ViewTable} />
                    <Route path="/view-all-rp" exact component={Reviewer_ResearchPaper_ViewTable} />
                    <Route path="/edit-researchpaper" exact component={Reviewer_ResearchPaper_Edit} />
                    <Route path="/edit-workshop" exact component={Reviewer_Workshop_Edit} />

                    <Route path="/view-ws" exact component={Reviewer_WorkShop_ViewOne} />
                    {/* <Route path="/view-researchpaper" exact component={Reviewer_ResearchPaper_ViewOne} /> */}

                    <Route exact path="/Admin_BudjectView"><Admin_BudjectView /></Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;


