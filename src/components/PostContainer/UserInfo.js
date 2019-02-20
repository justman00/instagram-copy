import React from "react";
import styled from "styled-components";

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
`;

// normal Component
const UserInfo = props => {
  return (
    <Header>
      <Thumbnail src={props.img} alt="user thumbnail" />
      <Username>{props.username}</Username>
    </Header>
  );
};

export default UserInfo;
