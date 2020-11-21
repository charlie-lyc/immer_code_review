import React from "react";

function Post(props) {
  return (
    <div>
      <h3>{props.postData.title}</h3>
      <p>{props.postData.content}</p>
    </div>
  );
}

export default Post;
