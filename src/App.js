import React, { Component } from 'react';
import './App.module.css';
import styles from './App.module.css';
import Auth from './components/Auth/Auth';
import Layout from './components/Layout/Layout';
import TextBrowser from './components/Messages/TextBrowser.js';
import ChatList from './components/ChatList.js'
import {connect} from 'react-redux';
import * as actions from './store/actions';
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';

const About = () => (
    <div>AboutPage</div>
);

class App extends Component {
  render() {
     /* let route =
          (
              <Switch>
                  <Route path='/about' exact component={About} />
                  <Route path='/login' exact component={Auth} />
                  <Redirect to='/login'></Redirect>
              </Switch>
          )
              <meta name="viewport" content="width=device-width, height=device-height, maximum-scale=1"/>
      ;
      if(this.props.token || localStorage.token) */
         let route = (
              <Switch>
                  <Route path='/chats/:name/' exact component={TextBrowser} />
                  <Route path='/chats' exact component={() => ChatList(this.props.userData.chatNames)} />

                  <Route path='/login' exact component={Auth} />
                  <Route path='/about' exact component={About} />
                  <Redirect to='/about'></Redirect>
              </Switch>
          )


    return (
        <Router>
          <div className={styles.App}>
              <meta name="viewport" content="width=device-width, height=device-height, maximum-scale=1"/>
              <Layout>
                  {route}
              </Layout>
              {/*
              <Route path='/' exact component={ChatList}/>
              <Route path='/:name' exact component={TextBrowser} />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
    */}

          </div>
        </Router>
    );
  }
}
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userData: state.user.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return  {
        checkToken: () => dispatch(actions.authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
