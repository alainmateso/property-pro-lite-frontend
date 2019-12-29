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
    // <div className="signup-form">
    //   <form onSubmit={this.handleSubmit}>
    //     <Input data-test="email" type="email" id="email" name="email" placeholder="Email..." required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={this.handleChange} title="Enter a valid email. eg: johndoe@gmail.com" />
    //     <Input data-test="username" type="text" id="username" name="username" placeholder="Username..." required pattern="[a-zA-Z]{3,10}" value={username} onChange={this.handleChange} title="Enter a valid name. Between 3 and 10 characters allowed." />
    //     <Input data-test="password" type="password" id="password" name="password" placeholder="Password..." required pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}" value={password} onChange={this.handleChange} title="Enter an 8+ length valid password. Allowed = 1 Uppercase, 1 lowercase, 1 number, 1 special character." />
    //     <Input data-test="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password..." required pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}" value={confirmPassword} onChange={this.handleChange} title="Enter an 8+ length valid password. Allowed = 1 Uppercase, 1 lowercase, 1 number, 1 special character." />
    //     <Button data-test="submitButton" name={isLoading ? <i style={{ fontSize: '20px' }} className="fas fa-spinner fa-pulse" /> : 'signup'} />
    //     <br />
    //     <div className="link">
    //       <Link to="/users">
    //       Login instead
    //       </Link>
    //     </div>
    //   </form>
    // </div>

      <div className="userForm">
        <h1 className="welcomeMessage"><a href="/home">Property-Pro Lite</a></h1>
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
