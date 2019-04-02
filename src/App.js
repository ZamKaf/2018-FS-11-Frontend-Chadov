import React, { Component } from 'react';
import './App.module.css';
import styles from './App.module.css';
import Auth from './components/Auth/Auth';
import Layout from './components/Layout/Layout';
import Chat from './components/Messages/Chat.js';
import ChatList from './components/ChatList.js'
import {connect} from 'react-redux';
import * as actions from './store/actions';
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';

const About = () => (
    <div>AboutPage</div>
);

class App extends Component {
  render() {
         let route = (
              <Switch>
                  <Route path='/chats/:name/' exact component={Chat} />
                  <Route path='/chats' exact component={() => ChatList(this.props.userData.chatNames)} />

                  <Route path='/login' exact component={Auth} />
                  <Route path='/about' exact component={About} />
                  <Redirect to='/about'></Redirect>
              </Switch>
          )


    return (
        <Router>
          <div className={styles.App}>
              <Layout>
                  {route}
              </Layout>

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
