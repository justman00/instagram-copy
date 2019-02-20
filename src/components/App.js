import React from "react";
import PostsPage from "./PostContainer/PostsPage";
import authenticate from "./authenticate/authenticate";
import Login from "./Login/Login";
import "./App.scss";

const App = () => <PostsPage />;

export default authenticate(App)(Login);
