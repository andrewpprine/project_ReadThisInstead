import React, { Component } from "react";
import "../App.css";

class Feed extends Component {
  state = {
    artTags: [, ,]
  };

  constructor() {
    super();
  }

  componentDidMount() {
    let newsURL =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=bfcf40411ab446aea8b4959454740fdc";
    let req = new Request(newsURL);
    let arr = [];

    return fetch(req).then(response => {
      console.log(
        response.json().then(data => {
          let i;
          console.log(data);
          for (i = 0; i < 3; i++) {
            let output = data.articles[i].title;

            arr.push(output);
            this.setState({
              artTags: arr
            });
          }
        })
      );
    });
  }

  refreshNews = product => {
    let newsURL =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=bfcf40411ab446aea8b4959454740fdc";
    let req = new Request(newsURL);
    let arr = [];

    return fetch(req).then(response => {
      console.log(
        response.json().then(data => {
          let i;

          for (i = 0; i < 3; i++) {
            let ranNum = Math.floor(Math.random() * 20);
            let output = data.articles[ranNum].title;

            arr.push(output);
            this.setState({
              artTags: arr
            });
          }
        })
      );
    });
  };

  createButton = () => {
    console.log("creat button func");
  };

  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div class="card border-dark mb-3" style={{ maxwidth: 18 + "rem" }}>
            <h3 class="card-header">What's New Today?</h3>
            <div class="card-body">
              <ul>
                {this.state.artTags.map(tag => (
                  <li key={tag} style={{ listStyle: "none" }}>
                    <div>
                      {tag}
                      <button class="btn btn-success m-2">Check It Out</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span>
            <button className="btn btn-secondary" onClick={this.refreshNews}>
              New Articles
            </button>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Feed;
