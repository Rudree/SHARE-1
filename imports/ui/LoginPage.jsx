import { Modal, Button, Col, Form, FormGroup, FormControl, ControlLabel, FieldGroup, Alert } from "react-bootstrap";
import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

console.log(Meteor.loggingIn());
console.log(Meteor.userId());
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        error: "",
        email: "",
        password: ""
      }
  }
  render() {
    let { email, password, error } = this.state;
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Body>
            {error.length > 0 ?
              <Alert bsStyle="warning">
                {error}
              </Alert>
              : ''}
            <Form horizontal onSubmit={this.onSubmit.bind(this)}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
              </Col>
                <Col sm={10}>
                  <FormControl type="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
              </Col>
                <Col sm={10}>
                  <FormControl type="password" value={this.state.Password} onChange={this.onPasswordChange.bind(this)} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle="primary" type="submit" >Login</Button>
                </Col>
              </FormGroup>
              <FormGroup>
                  <Col componentClass={ControlLabel} smOffset={2} sm={10}>
                    Don't have an account? Register <Link to="/register">here</Link>
                  </Col>
                </FormGroup>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }

  onEmailChange(e) {
    let email = e.target.value;
    this.setState({ email: email });
  }

  onPasswordChange(e) {
    let password = e.target.value;
    this.setState({ password: password });
  }

  onSubmit(e) {
    e.preventDefault();

    Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
      console.log("You initiated the login process.");
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.currentUser = Meteor.user()
        browserHistory.push('/home');
      }
    });

  }
}