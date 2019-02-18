import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./PostContainer/PostContainer";
import SearchBar from "./SearchBar/SearchBar";

import "./App.scss";

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    // console.log(dummyData);
    return (
      <div className="container">
        <SearchBar />
        {this.state.data.map(data => (
          <PostContainer key={data.username} data={data} />
        ))}
      </div>
    );
  }
}

export default App;
