import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IconSettings } from '@salesforce/design-system-react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Authorize from './components/Authorize';

ReactDOM.render(
  <IconSettings iconPath="/icons">
    <Router>
      <div className="slds-m-horizontal_medium slds-m-vertical_large">
        <div className="slds-medium-size_1-of-2 slds-align_absolute-center">
          <Route exact path="/" component={Authorize}/>
          <Route path="/app" component={App}/>
        </div>
      </div>
    </Router>
  </IconSettings>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
