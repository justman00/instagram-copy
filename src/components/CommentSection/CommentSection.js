import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import moment from "moment";
import InputForm from "../PostContainer/InputForm";
import styled, { css } from "styled-components";

// styled components
const Comments = styled.section`
  width: 98%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

const Icons = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

const Icon = styled.i`
  font-size: 3rem;
  margin-right: 3rem;
  opacity: 0.5;

  ${props =>
    props.liked &&
    css`
      color: red;
      transition: all 0.5s;
    `}
`;

const NumOrTime = styled.p`
  width: 100%;
  margin: 1rem 0;
  font-size: 1.8rem;
  ${props =>
    props.time &&
    css`
      font-size: 1.4rem;
      opacity: 0.5;
    `}
`;

// normal class
class CommentSection extends React.Component {
  state = {
    comments: this.props.comments,
    likes: this.props.likes,
    isLiked: false
  };

  // I did not use index since I render a different component for every post, thus they should not overlay, the value I take from the value of the input in the InputForm component
  addNewComment = (e, value, index) => {
    e.preventDefault();
    this.setState(
      prevState => ({
        comments: [
          ...prevState.comments,
          { username: localStorage.getItem("username"), text: value }
        ]
      }),
      () => {
        let newLocal = JSON.parse(localStorage.getItem("posts"));
        console.log(newLocal[index]);
        newLocal[index].comments = [
          ...newLocal[index].comments,
          { username: localStorage.getItem("username"), text: value }
        ];
        localStorage.setItem("posts", JSON.stringify(newLocal));
      }
    );
  };

  // checks if the post is already liked, if so it increments by one, else decrements
  addLike = () => {
    if (!this.state.isLiked) {
      this.setState(prevState => ({
        ...prevState.state,
        likes: ++prevState.likes,
        isLiked: !prevState.isLiked
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        likes: --prevState.likes,
        isLiked: !prevState.isLiked
      }));
    }
  };

  deleteComment = (index, comment) => {
    const newArr = this.state.comments.filter(com => !Object.is(com, comment));
    this.setState({ comments: newArr });
    let newLocal = JSON.parse(localStorage.getItem("posts"));
    newLocal[index].comments = newArr;
    localStorage.setItem("posts", JSON.stringify(newLocal));
  };

  render() {
    // console.log(this.props.index);
    return (
      <Comments>
        <Icons className="comments-icons">
          {!this.state.isLiked ? (
            <Icon onClick={() => this.addLike()} className="far fa-heart" />
          ) : (
            <Icon
              onClick={() => this.addLike()}
              className="fas fa-heart"
              liked
            />
          )}
          <Icon className="far fa-comment" />
        </Icons>
        <NumOrTime>{this.state.likes} likes</NumOrTime>
        {this.state.comments.map((comment, i) => (
          <Comment
            index={this.props.index}
            deleteComment={this.deleteComment}
            key={i}
            comment={comment}
          />
        ))}
        <NumOrTime time>
          {moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss").format(
            "dddd MMM YY"
          )}
        </NumOrTime>
        <InputForm
          index={this.props.index}
          addNewComment={this.addNewComment}
        />
      </Comments>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  likes: PropTypes.number,
  timestamp: PropTypes.string,
  index: PropTypes.number
};

export default CommentSection;
