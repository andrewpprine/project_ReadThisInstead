import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Feed Component Box</h2>
        <div class="container">
          <button className="btn btn-secondary">Search</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Feed;
