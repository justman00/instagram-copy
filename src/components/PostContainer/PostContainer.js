import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import UserInfo from "./UserInfo";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const PostContainer = props => {
  return (
    <>
      <UserInfo
        selectPost={props.selectPost}
        img={props.data.thumbnailUrl}
        username={props.data.username}
        index={props.index}
      />
      <Img src={props.data.imageUrl} alt="post" />
      <CommentSection
        index={props.index}
        timestamp={props.data.timestamp}
        likes={props.data.likes}
        comments={props.data.comments}
      />
    </>
  );
};

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  }),
  index: PropTypes.number,
  selectPost: PropTypes.func
};

export default PostContainer;
