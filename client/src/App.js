import React, { Component } from "react";
import NavBar from "./components/navbar";
import Feed from "./components/feed";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Hey, You should Read This Instead</h1>
        <Feed />
      </div>
    );
  }
}

// News API
let newsURL =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=bfcf40411ab446aea8b4959454740fdc";
let req = new Request(newsURL);
fetch(req).then(function(response) {
  console.log(response.json());
});

export default App;
