import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 5% auto;
`;

const SinglePost = props => {
  return (
    <Container>
      <PostContainer index={props.currentIndex} data={props.post} />;
    </Container>
  );
};

export default SinglePost;
