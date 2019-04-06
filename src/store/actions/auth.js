import * as actionTypes from './actionTypes';
import axios from 'axios';
import {initUserData} from './user';

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
    console.log("error^");
    console.log(error.config);
  return Promise.resolve({
    data: {
      token: 'sdfsdfsef34234wefsdf234',
        chatNames: ['Oleg', 'Boris']
    },
    status: 200,
    statusText: 'Ok',
    header: {},
    config: error.config
  })
});

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  }
};

export const authFailed = (err) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: err,
  }
};

export const auth = (authData) => {
  return dispatch => {
      console.log("auth dispatcher");
      dispatch(authSuccess(authData.token));
      dispatch(initUserData(authData));
  }
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if(token) {
      dispatch(authSuccess(token));
    }
  }
};
