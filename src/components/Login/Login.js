import React from "react";
import styled from "styled-components";

// styled comps
const Form = styled.form`
  max-width: 500px;
  margin: 5% auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoginText = styled.h1`
  margin: 0 auto;
  font-size: 3.6rem;
  font-family: "Helvetica", sans-serif;
  margin-bottom: 15%;
`;

const Label = styled.label`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 75%;
  outline: none;
  margin-bottom: 10%;
  padding: 15px;
  font-size: 1.8rem;
  border: none;
  border-bottom: 2px solid lightgray;

  &::placeholder {
    opacity: 0.5;
  }
`;

const Button = styled.button`
  margin-top: 5%;
  font-size: 2rem;
  border: none;
  padding: 15px;
  outline: none;
  cursor: pointer;
  background: #fff;

  border-radius: 15%;
  border: 1px solid lightgray;

  &:hover {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    text-align: center;
    transform: scale(1.15);
    box-shadow: 10px 10px 20px -13px rgba(lightgray, 0.75);
    transition: all 0.8s;
  }
`;

// Login comp
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
      <Form onSubmit={() => this.onLogIn(this.state.username)}>
        <LoginText>Login</LoginText>
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          onChange={e => this.handleChange(e)}
        />
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          onChange={e => this.handleChange(e)}
        />
        <Button type="Submit">Login</Button>
      </Form>
    );
  }
}

export default Login;
