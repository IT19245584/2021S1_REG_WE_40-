import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/LandingPage/index';



function App() {
  return (
  <div>
       <Router>
            <Switch>
                <Route exact path="/">
                    <Index/>
                </Route>
            </Switch>
      </Router>

  </div>
    );
}

export default App;


