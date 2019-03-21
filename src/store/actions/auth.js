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
/*headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        login: login,
        password: password,*/

/*.then(response => {
    console.log('response:');
  console.log(response);
  localStorage.setItem('token', response.data.token);
  dispatch(authSuccess(response.data.token));
})*/
export const auth = (login, password) => {
  return dispatch => {
    dispatch(authStart());
    //axios.post('/auth', {login, password})
      axios.get(`http://127.0.0.1:5000/login?login=${login}&password=${password}`)
      //fetch(`http://127.0.0.1:5000/login?login=${login}&password=${password}`, {
         /* method: 'GET',
          mode: 'no-cors'
      })*/
          .then((res)=>{
              console.log("object")
              console.log(res)
              //debugger
              if(200>=res.status && res.status<300){
                  return res;
              }
              throw new Error(res.statusText);
          })
          .then((res) => res.data)
          .then((res) =>{
              localStorage.setItem('token', res.token);
              dispatch(authSuccess(res.token));
              dispatch(initUserData(res));
          })
      .catch(error => {
          console.log('failed:');
          console.log(error);
          alert('Authotisation failed');
        dispatch(authFailed(error));
      })
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
