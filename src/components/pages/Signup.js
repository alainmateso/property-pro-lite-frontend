/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { compose } from 'redux';
import { signupAction } from '../../actions/authActions';

export class Signup extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      dataError, status, history,
    } = nextProps;

    switch (status) {
      case 'success':
        toast.success('Successfully Registered!');
        history.push('/home');
        break;
      case 'error':
        // eslint-disable-next-line no-case-declarations
        const { message, error = '' } = dataError;
        toast.error(`${message} \n ${error}`);
        break;
      default:
        break;
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { props } = this;
    e.preventDefault();

    const {
      email, username, password, confirmPassword,
    } = this.state;
    const userData = {
      email, username, password, confirmPassword,
    };
    props.signupAction(userData);
  };

  render() {
    return (

      <div className="userForm">
        <h1 className="welcomeMessage"><a href="/">Property-Pro Lite</a></h1>
        <h4 className="welcomeMessage">Fill this form to Sign Up</h4>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={this.handleChange} required />
            <label htmlFor="firstname">Firstname</label>
            <input type="text" name="firstname" onChange={this.handleChange} required />
            <label htmlFor="lastname">Lastname</label>
            <input type="text" name="lastname" onChange={this.handleChange} required />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" onChange={this.handleChange} required />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" onChange={this.handleChange} required />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.handleChange} required />
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" name="confirmPassword" onChange={this.handleChange} required />
            <button className="goButton" type="submit" name="signup">Create account</button>
            <p>
Already have an account?
<a href="/signin">
<i className="fas fa-sign-in-alt" />
Sign in
</a>
{' '}
&nbsp;
<a href="/">or go back Home</a>

            </p>
        </form>
      </div>

    );
  }
}

Signup.propTypes = {
  signupAction: PropTypes.func,
  dataError: PropTypes.object,
  history: PropTypes.object,
  status: PropTypes.string,
};

export const mapStateToProps = (state) => ({
  dataError: state.auth.dataError,
  data: state.auth.data,
  status: state.auth.status,
});

export default compose(withRouter, connect(mapStateToProps, { signupAction }))(Signup);
