import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Homepage from '../pages/Home';

  export default function Routes(){
      return(
          <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
            </Switch>
          </Router>
      )
  }