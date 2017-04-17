import { Meteor } from 'meteor/meteor';
// import React from 'react';
// import { render } from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from '../imports/ui/HomePage.jsx';
import Login from '../imports/ui/LoginPage.jsx';
import Register from '../imports/ui/RegistrationPage.jsx';
import ItemPage from '../imports/ui/UploadAnItem.jsx';
import ItemManagementPage from '../imports/manage/ItemAPI.jsx';
import HeadnavBar from '../imports/ui/HeadNavBar.jsx';

export const App = ( { children } ) => (
  <div>
    <HeadnavBar />
    { children }
  </div>
);

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="/home" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path = "/uploaditem" component={ItemPage}/>
        <Route path = "/manageitem" component={ItemManagementPage}/>
      </Route>
    </Router>
  , document.getElementById('render-home')
  );
});