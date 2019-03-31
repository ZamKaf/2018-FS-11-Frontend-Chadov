import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import App from './App';
import * as serviceWorker from './serviceWorker';
import userReducer from './store/reducers/user';
import chatReducer from './store/reducers/chat';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    auth: authReducer
});
const serverKey = 'AAAA-LeR6PU:APA91bG9nkRbIIUJNKKUYP6UYUIywIXtyHON6zDPw9-tNnxcU7TkZbc5BrGLAUHIKtIVxTBlTiWd7u2d9D4FoXXbkWi7c74e4ZJ8r59P8ryHk_ndirrHxECu-nZi-O6mAdXbpR-3ldXJ';

const config = {
    apiKey: "AIzaSyBNqV-P95-91WX4d3nrpY4m76dl_Qy3BSw",
    authDomain: "pwa-example-zipp3r.firebaseapp.com",
    databaseURL: "https://pwa-example-zipp3r.firebaseio.com",
    projectId: "pwa-example-zipp3r",
    storageBucket: "pwa-example-zipp3r.appspot.com",
    messagingSenderId: "1068231682293"
};

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

console.log('serviceWorker.register();.');
    firebase.initializeApp(config);

    console.log('firebase.')
    let messaging = firebase.messaging();
    console.log('messaging.')
    messaging.requestPermission()
        .then(() => {
            navigator.serviceWorker.ready.then((registration => {
                console.log('then((registration.');
                registration.addEventListener('push', (event) => {
                    alert("qwe;");
                    console.log("event");
                    console.log(event);
                });
                messaging.useServiceWorker(registration);

            })).then(() => {
                getToken(messaging);
            });
        })
        .catch((err) => {
            console.log('Unable to get permission to notify.', err);
        });

navigator.serviceWorker.addEventListener('push', (event) => {
    console.log("event");
    console.log(event);
    alert("1;");
});

const getToken = (messaging) => {
    messaging.getToken()
        .then((currentToken) => {
            if (currentToken) {
                const cUrl = `curl -X POST -H "Authorization: key=${serverKey}" -H "Content-Type: application/json" -d '{"notification": {"title": "Test"},"to": "${currentToken}"}' "https://fcm.googleapis.com/fcm/send";`
                console.log(cUrl);
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
}
