import React, { Component } from "react";
import PostsPage from "./PostContainer/PostsPage";
import authenticate from "./authenticate/authenticate";
import Login from "./Login/Login";

class App extends Component {
  render() {
    return <PostsPage />;
  }
}

export default authenticate(App)(Login);
