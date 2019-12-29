/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import createProperty from '../../actions/propertyActions';

export class newProperty extends Component {
  state = {
    price: '',
    state: '',
    city: '',
    address: '',
    type: '',
    selectedFile: null,
  };

  static getDerivedStateFromProps(nextProps) {
    const {
      propertyData, status, history, propertyError,
    } = nextProps;

    switch (status) {
      case 'Success':
        history.push('/home/');
        return {
          propertyData,
        };
      case 'Failure':
        return {
          propertyError,
        };
      default:
        return null;
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileChange = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      price, state, city, address, type, selectedFile,
    } = this.state;

    const formData = new FormData();

    formData.append('image', selectedFile);
    const data = {
      price, state, city, address, type,
    };
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    const { createProperty: addProperty } = this.props;
    addProperty(formData);
  };

  render() {
    return (
    <div className="content">
            <section className="contentSection">
                <div className="propertyForm">
                    <h3 className="welcomeMessage">Fill this form to post a new property advert</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="price">Price in Rwf</label>
                        <input type="number" name="price" min="1" onChange={this.handleChange} required />
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" onChange={this.handleChange} required />
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" onChange={this.handleChange} required />
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" onChange={this.handleChange} required />
                        <label htmlFor="address">Type</label>
                        <input type="text" name="type" onChange={this.handleChange} required />
                        <label htmlFor="pictures">Add picure</label>
                        <input type="file" name="selectedFile" onChange={this.handleFileChange} accept="image/*" required />
                        <button type="submit" className="goButton">Post property</button>
                    </form>
                </div>
            </section>
    </div>


    );
  }
}

newProperty.propTypes = {
  status: PropTypes.string,
};

const mapStateToProps = (state) => ({
  propertyData: state.property.propertyData,
  propertyError: state.property.propertyError,
  status: state.property.status,
});

export default compose(withRouter, connect(mapStateToProps, { createProperty }))(newProperty);
