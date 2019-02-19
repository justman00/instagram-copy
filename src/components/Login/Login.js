import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogIn = (username, password) => {
    if (!localStorage.getItem(username)) {
      localStorage.setItem(username, password);
    }
  };

  render() {
    return (
      <form
        onSubmit={() => this.onLogIn(this.state.username, this.state.password)}
      >
        <input
          type="text"
          name="username"
          onChange={e => this.handleChange(e)}
        />
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
