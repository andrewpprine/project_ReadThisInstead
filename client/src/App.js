import React, { Component } from "react";
import NavBar from "./components/navbar";
import Feed from "./components/feed";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Hey, You Should Read This Instead</h1>

        <Feed />
      </div>
    );
  }
}
// News API
// fetchNews = () => {

// };

export default App;
