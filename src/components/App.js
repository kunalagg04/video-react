import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onFormSubmit = term => {
    console.log(term);
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
