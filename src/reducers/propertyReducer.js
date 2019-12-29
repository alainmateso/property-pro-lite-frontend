import { NEW_PROPERTY, NEW_PROPERTY_ERROR } from '../actions/types';

const initialState = {
  propertyData: null,
  propertyError: null,
  status: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_PROPERTY:
      return {
        ...state,
        propertyData: payload,
        status: 'Success',
      };
    case NEW_PROPERTY_ERROR:
      return {
        ...state,
        propertyError: payload,
        status: 'Failure',
      };
    default:
      return {
        ...state,
      };
  }
};
