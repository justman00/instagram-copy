import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./PostContainer/PostContainer";
import SearchBar from "./SearchBar/SearchBar";

import "./App.scss";

class App extends Component {
  render() {
    // console.log(dummyData);
    return (
      <div className="container">
        <SearchBar />
        {dummyData.map(data => (
          <PostContainer key={data.username} data={data} />
        ))}
      </div>
    );
  }
}

export default App;
