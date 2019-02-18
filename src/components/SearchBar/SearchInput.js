import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchInput extends Component {
  state = { input: "" };

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={e => this.props.onFilterSearch(e, this.state.input)}>
        <input
          type="text"
          className="search"
          placeholder="Search"
          name="input"
          onChange={e => this.onHandleChange(e)}
        />
      </form>
    );
  }
}

SearchInput.propTypes = {
  onFilterSearch: PropTypes.func
};

export default SearchInput;
