import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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

  </div>
    );
}

export default App;


