import React from "react";
import ReactDOM from "react-dom";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { word: "" };

  OnformSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.word);
  };

  onInputChange = event => {
    this.setState({ word: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.OnformSubmit}>
        <input
          type="text"
          name="search"
          onChange={this.onInputChange}
          value={this.state.word}
        />
      </form>
    );
  }
}

export default SearchBar;
