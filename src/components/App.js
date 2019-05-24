import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [], selectedvideo: null };

  onFormSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(
      response
    ); /* Checkout console to get exact address of array of videos. */
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div>
        <center>
          <h2>
            <i className="fab fa-youtube" /> Welcome to my React Videos Project{" "}
          </h2>
        </center>
        <hr />
        <br />

        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
