import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div className="comments">
      <div className="comments-icons">
        <i className="far fa-heart" />
        <i className="far fa-comment" />
      </div>
      <p className="likes-num">{props.likes} likes</p>
      {props.comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
      <p className="timestamp">{props.timestamp}</p>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  likes: PropTypes.number,
  timestamp: PropTypes.string
};

export default CommentSection;
