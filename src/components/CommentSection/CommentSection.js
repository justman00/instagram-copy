import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import moment from "moment";
import InputForm from "../PostContainer/InputForm";

class CommentSection extends React.Component {
  state = {
    comments: this.props.comments,
    likes: this.props.likes,
    isLiked: false
  };

  addNewComment = (e, value) => {
    e.preventDefault();
    this.setState(prevState => ({
      comments: [...prevState.comments, { username: "Vlad", text: value }]
    }));
  };

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

  render() {
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
          <Comment key={i} comment={comment} />
        ))}
        <p className="timestamp">
          {moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss").format(
            "dddd MMM YY"
          )}
        </p>
        <InputForm addNewComment={this.addNewComment} />
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
  timestamp: PropTypes.string
};

export default CommentSection;
