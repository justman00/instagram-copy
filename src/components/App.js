import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./PostContainer/PostContainer";
import SearchBar from "./SearchBar/SearchBar";

import "./App.scss";

class App extends Component {
  state = { data: [], displayData: undefined };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  onFilterSearch = (e, term) => {
    e.preventDefault();
    const newArr = this.state.data.filter(el => el.username.includes(term));
    this.setState({ displayData: newArr });
  };

  render() {
    // it chooses what to render on the screen and checks for some edge cases
    let content;
    if (this.state.displayData === undefined) {
      content = (
        <div className="container">
          <SearchBar onFilterSearch={this.onFilterSearch} />
          {this.state.data.map(data => (
            <PostContainer key={data.username} data={data} />
          ))}
        </div>
      );
    } else if (this.state.displayData.length === 0) {
      content = (
        <div className="container">
          <SearchBar onFilterSearch={this.onFilterSearch} />
          <h1 className="error">No posts found for the searched term</h1>
        </div>
      );
    } else {
      content = (
        <div className="container">
          <SearchBar onFilterSearch={this.onFilterSearch} />
          {this.state.displayData.map(data => (
            <PostContainer key={data.username} data={data} />
          ))}
        </div>
      );
    }
    return content;
  }
}

export default App;
