import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import UserInfo from "./UserInfo";

const PostContainer = props => {
  return (
    <div>
      <UserInfo img={props.data.thumbnailUrl} username={props.data.username} />
      <CommentSection comments={props.data.comments} />
    </div>
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
  })
};

export default PostContainer;
