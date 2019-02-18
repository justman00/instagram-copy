import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div>
      <h3>CommentSection</h3>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
