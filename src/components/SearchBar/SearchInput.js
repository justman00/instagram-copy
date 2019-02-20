import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// styled components
const Form = styled.form`
  width: 30%;

  @media (max-width: 500px) {
    width: 25%;
    margin-left: 3rem;
  }
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.6rem;
  outline: none;
  width: 100%;

  &::placeholder {
    opacity: 0.5;
    text-align: center;
  }
`;

// class components
class SearchInput extends Component {
  state = { input: "" };

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={e => this.props.onFilterSearch(e, this.state.input)}>
        <Input
          type="text"
          placeholder="Search"
          name="input"
          onChange={e => this.onHandleChange(e)}
        />
      </Form>
    );
  }
}

SearchInput.propTypes = {
  onFilterSearch: PropTypes.func
};

export default SearchInput;
