import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// styled comps
const CommentDiv = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 1.6rem;
  margin: 0.7rem 0;
  width: 100%;
  justify-content: space-between;
`;

const HelperDiv = styled.div`
  display: flex;
`;

const Username = styled.h3`
  font-weight: 600;
  margin-right: 0.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  margin-left: 2rem;
  border: none;
  border-bottom: 1px solid red;
  outline: none;
  padding-bottom: 5px;
  font-size: 1.4rem;
  color: red;
`;
// Comment component
const Comment = props => {
  return (
    <CommentDiv>
      <HelperDiv>
        <Username>{props.comment.username}</Username>{" "}
        <p>{props.comment.text}</p>
      </HelperDiv>
      {props.comment.username === localStorage.getItem("username") ? (
        <Button onClick={() => props.deleteComment(props.index, props.comment)}>
          Delete
        </Button>
      ) : (
        <div />
      )}
    </CommentDiv>
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
