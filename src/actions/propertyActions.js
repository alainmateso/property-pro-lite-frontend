import { NEW_PROPERTY_ERROR, NEW_PROPERTY } from './types';
import backendCall from '../helpers/backendCall';

const accommodationType = (type, payload) => ({
  type,
  payload,
});

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'multipart/form-data',
  Authorization: `Bearer ${token}`,
};

const createProperty = (propertyDetails) => async (dispatch) => {
  try {
    const res = await backendCall.post('/property', propertyDetails, { headers });
    dispatch(accommodationType(NEW_PROPERTY, res.data));
  } catch (error) {
    dispatch(accommodationType(NEW_PROPERTY_ERROR, error.response));
  }
};

export default createProperty;
