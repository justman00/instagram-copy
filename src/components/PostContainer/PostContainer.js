import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div>
      <h2>PostContainer</h2>
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
