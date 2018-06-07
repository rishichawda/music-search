import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './component/navbar';
import StartPage from './component/startpage';

class App extends Component {
  render() {
    return (
      <div className="a0-main">
        <Navbar />
        <StartPage />
      </div>
    );
  }
}

export default App;
