import React from 'react';
import { IndexLink, Link } from 'react-router';

class HeadNavBar extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/uploaditem">Item upload</Link></li>
        <li><Link to="/manageitem">Item Management</Link></li>
        {Meteor.loggingIn() ?
          <li><Link to="#" onClick={Meteor.logout()}>Logout</Link></li> : ""}
      </ul>
    );
  }
}

export default HeadNavBar;









