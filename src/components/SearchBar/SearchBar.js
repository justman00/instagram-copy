import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <header className="header">
      <div className="instagram">
        <i className="fab fa-instagram" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="instagram logo"
        />
      </div>
      <input type="text" className="search" placeholder="Search" />
      <div className="icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </header>
  );
};

export default SearchBar;
