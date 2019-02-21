import React from "react";
import SearchInput from "./SearchInput";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

//styled components
const Header = styled.header`
  width: 98%;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Instagram = styled.div`
  margin-left: 10px;
  display: flex;
  width: 12%;
`;

const IgImg = styled.img`
  height: 30px;
  margin-left: 10px;

  @media (max-width: 500px) {
    height: 20px;
  }
`;

const Icon = styled.i`
  font-size: 3rem;
  padding-right: ${props => (props.paddingRight ? props.paddingRight : "0")}
  border-right: ${props => (props.borderRight ? props.borderRight : "none")}
  opacity: ${props => (props.opacity ? props.opacity : "1")}

  @media (max-width: 500px) {
    font-size: 2rem;
  }

  &:last-child {
    cursor: pointer;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 18%;
  justify-content: space-between;
  margin-right: 10px;
`;

// SearchBar component
const SearchBar = props => {
  const logout = () => {
    localStorage.removeItem("username");
    window.location.reload(true);
  };

  return (
    <Header>
      <Instagram>
        <Link to="/">
          <Icon
            paddingRight="10px"
            borderRight="1px solid black"
            className="fab fa-instagram"
          />
        </Link>
        <IgImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="instagram logo"
        />
      </Instagram>
      <SearchInput onFilterSearch={props.onFilterSearch} />
      <Icons>
        <Icon opacity=".3" className="far fa-compass" />
        <Icon opacity=".3" className="far fa-heart" />
        <Icon onClick={() => logout()} opacity=".3" className="far fa-user" />
      </Icons>
    </Header>
  );
};

SearchBar.propTypes = {
  onFilterSearch: PropTypes.func
};

export default SearchBar;
