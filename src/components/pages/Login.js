/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { compose } from 'redux';
import userLogin from '../../actions/authActions';

export class Login extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    email: '',
    password: '',
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      data, dataError, status, history,
    } = nextProps;
    switch (status) {
      case 'Success':
        // toast.success(data.message);
        history.push('/home');
        break;
      case 'Failure':
        // toast.error(dataError.data.message);
        break;
      default:
        break;
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const credentials = {
      email,
      password,
    };
    // this.props.userLogin(credentials);
    const { userLogin: login } = this.props;
    login(credentials);
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="userForm">
        <h1 className="welcomeMessage"><a href="/">Property-Pro Lite</a></h1>
        <h4 className="welcomeMessage">Log in to have access</h4>
        <form onSubmit={this.submitForm}>
          <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={this.handleChange} required />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.handleChange} required />
            <button className="goButton" name="login">Login</button>
            <p>
                {' '}
                You don't have an account?
                <a href="Signup">
                <i className="fas fa-user-plus" />
                Sign Up
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

Login.propTypes = {
  userLogin: PropTypes.func,
  data: PropTypes.object,
  dataError: PropTypes.object,
  history: PropTypes.object,
  status: PropTypes.string,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  data: state.auth.data,
  dataError: state.auth.dataError,
  status: state.auth.status,
});

export default compose(withRouter, connect(mapStateToProps, { userLogin }))(Login);
