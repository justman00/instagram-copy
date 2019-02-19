import React from "react";
import "./CommentSection.scss";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment">
      <h3>{props.comment.username}</h3> <p>{props.comment.text}</p>{" "}
      <button onClick={() => props.deleteComment(props.index, props.comment)}>
        Delete
      </button>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  }),
  index: PropTypes.number,
  deleteComment: PropTypes.func
};

export default Comment;
