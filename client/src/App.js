import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;



// News API
var newsURL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=bfcf40411ab446aea8b4959454740fdc';
var req = new Request(newsURL);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })