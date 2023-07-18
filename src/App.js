import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MandatoryFeature from './pages/feature-generic/Feature';

import Navbar from "./featureComponents/Navbar.js"
import ExampleButton from "./featureComponents/ExampleButton"

//---------------------------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ExampleOptional from './featureComponents/ExampleOptional';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <MandatoryFeature component="Navbar"/>
              <MandatoryFeature component="ExampleButton"/>
              <ExampleOptional/>
            </Route>  
          </Switch>
        </Router>
      </div>
    )
  }
}
