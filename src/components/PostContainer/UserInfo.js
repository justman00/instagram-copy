import React from "react";
import "./PostContainer.scss";

const UserInfo = props => {
  return (
    <header className="user-info">
      <img src={props.img} alt="user thumbnail image" />
      <h4>{props.username}</h4>
    </header>
  );
};

export default UserInfo;
