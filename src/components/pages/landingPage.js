/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export class landingPage extends Component {
  render() {
    return (
            <div>
                <h1>Welcome Back</h1>
                <button type="button" className="goButton"><a href="/new-property"> Create a new Property</a></button>
            </div>
    );
  }
}

export default landingPage;
