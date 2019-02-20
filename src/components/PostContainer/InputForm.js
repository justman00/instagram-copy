import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// styled comps
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  border-top: 1px solid lightgray;
  font-size: 1.6rem;
`;

const Input = styled.input`
  width: 75%;
  padding: 12px;

  border: none;
  outline: none;
  font-size: 1.6rem;

  &::placeholder {
    opacity: 0.5;
  }
`;

// InputForm comp
class InputForm extends React.Component {
  state = { input: "" };

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props.index);
    return (
      <Form
        onSubmit={e => {
          this.props.addNewComment(e, this.state.input, this.props.index);
          this.setState({ input: "" });
        }}
      >
        <Input
          name="input"
          type="text"
          placeholder="Add a comment..."
          onChange={e => this.onHandleChange(e)}
          value={this.state.input}
        />
        <i className="fas fa-ellipsis-h" />
      </Form>
    );
  }
}

InputForm.propTypes = {
  addNewComment: PropTypes.func.isRequired,
  index: PropTypes.number
};

export default InputForm;
