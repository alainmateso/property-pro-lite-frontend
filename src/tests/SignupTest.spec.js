import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from '../components/pages/Signup';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { mapStateToProps } from '../components/pages/Signup';

const middlewares = [thunk];

const mainState = {
  auth: {
    dataError: {},
    status: 'status'
  }
}

const props = {
  props: {
    signup: {
      data: null,
      dataError: null,
      status: '',
    }
  },
  history: {

  },
  signupAction: jest.fn()
}

const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};

const setUp = (initialState =  {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
      <Signup {...props} store={store} />
  );
    return wrapper;
} 

describe('Signup Test Suite', () => { 

  it('Should Simulate Successfull Signup', () => {
    const component = setUp(mainState); 
    component.setProps({history: {push: jest.fn()}, status: 'success'});
    const { push } = component.instance().props.history;
    expect(push).toHaveBeenCalledWith('/home'); 
  }); 

  it('Should Simulate Failed Signup', () => {
    const component = setUp(mainState); 
    component.setProps({history: {push: jest.fn()}, dataError: { data: { message: 'Failed' } }, status: 'error'});
    const { push } = component.instance().props.history;
    expect(push).toHaveBeenCalledTimes(0); 
  }); 

  it('Should Simulate Default Status', () => {
    const component = setUp(mainState); 
    component.setProps({history: {push: jest.fn()}, status: ''});
    const { push } = component.instance().props.history;
    expect(push).toHaveBeenCalledTimes(0);
  }); 

  it('Should return initial data', () => {
    const initialState = {
        auth: {
          data: null,
          dataError: null,
          status: '',
        }
    };
    expect(mapStateToProps(initialState).data).toEqual(null);
  });

});
