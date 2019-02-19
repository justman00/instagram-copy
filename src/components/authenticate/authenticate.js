import React from "react";

const authenticate = Component =>
  class extends React.Component {
    render() {
      return <Component />;
    }
  };

export default authenticate;
