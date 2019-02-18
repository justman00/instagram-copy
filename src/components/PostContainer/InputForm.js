import React from "react";
import "./PostContainer.scss";
import PropTypes from "prop-types";

class InputForm extends React.Component {
  state = { input: "" };

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props.index);
    return (
      <form
        onSubmit={e => {
          this.props.addNewComment(e, this.state.input, this.props.index);
          this.setState({ input: "" });
        }}
        className="input-form"
      >
        <input
          name="input"
          type="text"
          placeholder="Add a comment..."
          onChange={e => this.onHandleChange(e)}
          value={this.state.input}
        />
        <i className="fas fa-ellipsis-h" />
      </form>
    );
  }
}

InputForm.propTypes = {
  addNewComment: PropTypes.func.isRequired,
  index: PropTypes.number
};

export default InputForm;
