import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import moment from "moment";
import InputForm from "../PostContainer/InputForm";

class CommentSection extends React.Component {
  state = {
    comments: JSON.parse(localStorage.getItem("posts"))[this.props.index]
      .comments,
    likes: this.props.likes,
    isLiked: false
  };

  // I did not use index since I render a different component for every post, thus they should not overlay, the value I take from the value of the input in the InputForm component
  addNewComment = (e, value, index) => {
    e.preventDefault();
    this.setState(
      prevState => ({
        comments: [...prevState.comments, { username: "Vlad", text: value }]
      }),
      () => {
        let newLocal = JSON.parse(localStorage.getItem("posts"));
        console.log(newLocal[index]);
        newLocal[index].comments = [
          ...newLocal[index].comments,
          { username: "Vlad", text: value }
        ];
        localStorage.setItem("posts", JSON.stringify(newLocal));
      }
    );
  };

  // checks if the post is already liked, if so it increments by one, else decrements
  addLike = () => {
    if (!this.state.isLiked) {
      this.setState({
        ...this.state,
        likes: ++this.state.likes,
        isLiked: !this.state.isLiked
      });
    } else {
      this.setState({
        ...this.state,
        likes: --this.state.likes,
        isLiked: !this.state.isLiked
      });
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
      <div className="comments">
        <div className="comments-icons">
          {!this.state.isLiked ? (
            <i onClick={() => this.addLike()} className="far fa-heart" />
          ) : (
            <i onClick={() => this.addLike()} className="fas fa-heart like" />
          )}
          <i className="far fa-comment" />
        </div>
        <p className="likes-num">{this.state.likes} likes</p>
        {this.state.comments.map((comment, i) => (
          <Comment
            index={this.props.index}
            deleteComment={this.deleteComment}
            key={i}
            comment={comment}
          />
        ))}
        <p className="timestamp">
          {moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss").format(
            "dddd MMM YY"
          )}
        </p>
        <InputForm
          index={this.props.index}
          addNewComment={this.addNewComment}
        />
      </div>
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
