import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/assert/css/Editor/editor.css';
import Index from './components/LandingPage/index';

import OrganizingCommittee from './components/LandingPage/Committee/OrganizingCommittee';
import TechnicalCommittee from './components/LandingPage/Committee/TechnicalCommittee';
import ContactUs from './components/LandingPage/ContactUs/ContactUs';
import KeyNotes from './components/LandingPage/KeyNotes/Keynotes';
import AboutUs from './components/LandingPage/AboutUs/AboutUs';
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

import Reviewer_Workshop_Edit from './components/Admin/Reviewer/Workshop/reviewer_workshop_edit';
import Reviewer_WorkShop_ViewTable from './components/Admin/Reviewer/Workshop/reviewer_workshop_view_table';
import Reviewer_ResearchPaper_Edit from './components/Admin/Reviewer/ResearchPaper/reviewer_researchpaper_edit';
import Reviewer_ResearchPaper_ViewTable from './components/Admin/Reviewer/ResearchPaper/reviewer_researchpaper_view_table';
import NAV from './components/Admin/Reviewer/reviewer_dashboard';



import Admin_dashbord from './components/Admin/Admin/admin_dashaboard.jsx';
import Admin_BudjectView from './components/Admin/Admin/admin_BujectView.jsx';
import Admin_side_login from './components/Admin/login';
import Admin_side_registration from './components/Admin/registration';
import Admin_side_Wait from './components/Admin/waitPage';
import Admin_side_pass_rest from './components/Admin/resetPassword';
import Admin_dashboard_user from './components/Admin/Admin/admin_dashboard_user';
import Admin_dashboard_Add_user from './components/Admin/Admin/admin_Add_new_user';
import Admin_Reset_password from './components/Admin/Admin/admin_Reset_password';
import Admin_keynote from './components/Admin/Admin/admin_keynote_person';
import Admin_Supplier from './components/Admin/Admin/admin_supplier';
import Admin_add_Supplier from './components/Admin/Admin/admin_add_Supplier';

import ViewOrgCommittee from './components/Admin/Editor/Committee/OrganizingCommittee/ViewOrganizingCommittee';
import ViewTechCommittee from './components/Admin/Editor/Committee/TechnicalCommittee/ViewTechnicalCommittee';
import UpdateOrgCommittee from './components/Admin/Editor/Committee/OrganizingCommittee/UpdateOrganizingCommittee';
import UpdateTechCommittee from './components/Admin/Editor/Committee/TechnicalCommittee/UpdateTechnicalCommittee';
import AddPastProceeding from './components/Admin/Editor/PastProceeding/AddPastProceeding';
import ViewPastProceeding from './components/Admin/Editor/PastProceeding/ViewPastProceeding';
import UpdatePastProceeding from './components/Admin/Editor/PastProceeding/UpdatePastProceeding';
import UpdateImportantDates from './components/Admin/Editor/ImportantDates/UpdateImportantDates';
import UpdateAboutUs from './components/Admin/Editor/AboutUs/UpdateAboutUs';
import ViewAboutUs from './components/Admin/Editor/AboutUs/ViewAboutUs';
import UpdateKeyNoteSpeaker from './components/Admin/Editor/KeyNotes/KeyNoteSpeakers/UpdateKeynotes';
import UpdateGuestSpeaker from './components/Admin/Editor/KeyNotes/GuestSpeakers/UpdateGuestSpeaker';
import EditorHome from './components/Admin/Editor/EditorHome';
import ImportantDatePdf from './components/LandingPage/ImportantDates/ImportantDatePdf';

import Admin_dashbord from './components/Admin/Admin/admin_dashaboard.jsx';
import Admin_BudjectView from './components/Admin/Admin/admin_BujectView.jsx';
import Registration from './components/LandingPage/Signin/Registration';
import Login from './components/LandingPage/Signin/Login';
import AddResearch from './components/Admin/User/Research/AddReseacrhPaper';
import AddWorkshop from './components/Admin/User/workshop/AddWorkshopDetails';
import Research from './components/Admin/User/Research/HomePage';
import Workshop from './components/Admin/User/workshop/HomePage';
import Reset from './components/LandingPage/Signin/UpdatePassword';

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

                    <Route exact path='/Registration'><Registration /></Route>
                    <Route exact path='/Login'><Login /></Route>
                    <Route exact path='/reset'><Reset /></Route>
                    <Route exact path='/research'><Research /></Route>
                    <Route exact path='/addResearch'><AddResearch /></Route>
                    <Route exact path='/workshop'><Workshop /></Route>
                    <Route exact path='/addWorkshop'><AddWorkshop /></Route>


                    {/* Editor Pages  */}
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
                    <Route exact path='/viewtech'><ViewTechCommittee /></Route>
                    <Route exact path='/updateorg'><UpdateOrgCommittee /></Route>
                    <Route exact path='/updatetech'><UpdateTechCommittee /></Route>
                    <Route exact path='/updatepast'><UpdatePastProceeding /></Route>
                    <Route exact path='/viewpast'><ViewPastProceeding /></Route>
                    <Route exact path='/addpast'><AddPastProceeding /></Route>
                    <Route exact path='/updateimpdate'><UpdateImportantDates /></Route>
                    <Route exact path='/updateaboutus'><UpdateAboutUs /></Route>
                    <Route exact path='/viewaboutus'><ViewAboutUs /></Route>
                    <Route exact path='/update-keynote-speaker'><UpdateKeyNoteSpeaker /></Route>
                    <Route exact path='/update-guest-speaker'><UpdateGuestSpeaker /></Route>
                    <Route exact path='/editor-home'><EditorHome /></Route>
                    <Route exact path='/dates-pdf'><ImportantDatePdf /></Route>

                    {/* Admin Pages */}
                    <Route exact path="/Admin_dashbord"><Admin_dashbord /></Route>


                    <Route exact path="/Admin_side_login"><Admin_side_login /></Route>
                    <Route exact path="/Admin_side_registration"><Admin_side_registration /></Route>
                    <Route exact path="/Admin_side_Wait"><Admin_side_Wait /></Route>
                    <Route exact path="/Admin_side_pass_rest"><Admin_side_pass_rest /></Route>
                    <Route exact path="/Admin_dashboard_user"><Admin_dashboard_user /></Route>
                    <Route exact path="/Admin_dashboard_Add_user"><Admin_dashboard_Add_user /></Route>
                    <Route exact path="/Admin_Reset_password"><Admin_Reset_password /></Route>
                    <Route exact path="/Admin_keynote"><Admin_keynote /></Route>
                    <Route exact path="/Admin_Supplier"><Admin_Supplier /></Route>
                    <Route exact path="/Admin_add_Supplier"><Admin_add_Supplier /></Route>
                    

                    <Route exact path="/Admin_BudjectView"><Admin_BudjectView /></Route>

                    {/* Reviewer's pages */}
                    <Route path="/dashboard" exact component={NAV} />
                    <Route path="/view-all-rp" exact component={Reviewer_ResearchPaper_ViewTable} />
                    <Route path="/view-all-ws" exact component={Reviewer_WorkShop_ViewTable} />
                    <Route path="/update" exact component={Reviewer_ResearchPaper_Edit} />
                    <Route path="/update" exact component={Reviewer_Workshop_Edit} />

                </Switch>
            </Router>
        </div>
    );
}

export default App;





