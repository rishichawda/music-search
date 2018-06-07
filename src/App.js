import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './component/navbar';
import StartPage from './component/startpage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MusicResults from './component/musicresults';
import VideoResults from './component/videoresults';

class App extends Component {
  render() {
    return (
      <div className="a0-main">
        <Navbar />
        <Router >
        <div>
        <Route exact path="/" component={StartPage} />
        <Route path="/music" component={MusicResults} />
        <Route path="/video" component={VideoResults} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
