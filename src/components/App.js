import React, { Component } from "react";
import PostsPage from "./PostContainer/PostsPage";
import authenticate from "./authenticate/authenticate";

class App extends Component {
  render() {
    return <PostsPage />;
  }
}

export default authenticate(App);
