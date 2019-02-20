import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// styled comps
const Header = styled.header`
  width: 95%;
  margin: 55px auto 15px;
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Username = styled.h4`
  font-size: 1.8rem;
  font-family: sans-serif;

  a {
    text-decoration: none;
    color: black;
  }
`;

// normal Component
const UserInfo = props => {
  return (
    <Header>
      <Thumbnail src={props.img} alt="user thumbnail" />
      <Username>
        <Link onClick={() => props.selectPost(props.index)} to="/single-post">
          {props.username}
        </Link>
      </Username>
    </Header>
  );
};

UserInfo.propTypes = {
  img: PropTypes.string,
  username: PropTypes.string,
  index: PropTypes.number,
  selectPost: PropTypes.func
};

export default UserInfo;
