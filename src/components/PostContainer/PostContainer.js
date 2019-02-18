import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import UserInfo from "./UserInfo";

const PostContainer = props => {
  return (
    <>
      <UserInfo img={props.data.thumbnailUrl} username={props.data.username} />
      <img src={props.data.imageUrl} alt="post" className="post-image" />
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
  index: PropTypes.number
};

export default PostContainer;
