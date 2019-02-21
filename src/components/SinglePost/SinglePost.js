import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 900px;
  margin: 5% auto;
`;

const SinglePost = props => {
  return (
    <Container>
      {/* <Link to="/">Home</Link> */}
      <PostContainer
        index={localStorage.getItem("currentIndex")}
        data={JSON.parse(localStorage.getItem("selectedPost"))}
      />
      ;
    </Container>
  );
};

export default SinglePost;
