import React, { Component } from 'react';
import './App.css';
import TextBrowser from './TextBrowser.js';
import StartPage from './StartPage.js'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Route path='/' exact component={StartPage}/>
              <Route path='/:name' exact component={TextBrowser} />
              {/*
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

export default App;
