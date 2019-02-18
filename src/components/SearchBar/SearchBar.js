import React from "react";
import "./SearchBar.scss";
import SearchInput from "./SearchInput";
import PropTypes from "prop-types";

const SearchBar = props => {
  return (
    <header className="header">
      <div className="instagram">
        <i className="fab fa-instagram" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="instagram logo"
        />
      </div>
      <SearchInput onFilterSearch={props.onFilterSearch} />
      <div className="icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </header>
  );
};

SearchBar.propTypes = {
  onFilterSearch: PropTypes.func
};

export default SearchBar;
