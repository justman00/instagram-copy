import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./PostContainer/PostContainer";
import SearchBar from "./SearchBar/SearchBar";
import Fuse from "fuse.js";

import "./App.scss";

// localStorage.clear();

class App extends Component {
  state = { data: [], displayData: undefined };

  componentDidMount() {
    // if local storage does not have a posts array, we will initiate it and set our state to the data coming from the local storage
    console.log(dummyData);
    if (
      !localStorage.getItem("posts") ||
      localStorage.getItem("posts").length === 0
    ) {
      localStorage.setItem("posts", JSON.stringify(dummyData));
      this.setState({ data: JSON.parse(localStorage.getItem("posts")) });
    } else {
      this.setState({ data: JSON.parse(localStorage.getItem("posts")) });
    }
  }

  onFilterSearch = (e, term) => {
    e.preventDefault();
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["username"]
    };
    const fuse = new Fuse(this.state.data, options);
    // const newArr = this.state.data.filter(el => el.username.includes(term));
    const result = fuse.search(term);
    if (term !== "") {
      this.setState({ displayData: result });
    } else {
      this.setState({ displayData: this.state.data });
    }
  };

  render() {
    // it chooses what to render on the screen and checks for some edge cases
    let content;
    if (this.state.displayData === undefined) {
      content = (
        <div className="container">
          <SearchBar onFilterSearch={this.onFilterSearch} />
          {this.state.data.map((data, i) => (
            <PostContainer index={i} key={data.username} data={data} />
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
          {this.state.displayData.map((data, i) => (
            <PostContainer index={i} key={data.username} data={data} />
          ))}
        </div>
      );
    }
    return content;
  }
}

export default App;
