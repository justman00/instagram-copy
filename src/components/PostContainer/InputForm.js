import React from "react";
import "./PostContainer.scss";

const InputForm = () => {
  return (
    <div className="input-form">
      <input type="text" placeholder="Add a comment..." />
      <i class="fas fa-ellipsis-h" />
    </div>
  );
};

export default InputForm;
