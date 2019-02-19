import React from "react";
import "./Login.scss";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogIn = username => {
    if (!localStorage.getItem("username")) {
      if (username !== "") {
        localStorage.setItem("username", username);
      }
    }
  };

  render() {
    return (
      <form
        className="form-container"
        onSubmit={() => this.onLogIn(this.state.username)}
      >
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={e => this.handleChange(e)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={e => this.handleChange(e)}
        />
        <button type="Submit">Login</button>
      </form>
    );
  }
}

export default Login;
