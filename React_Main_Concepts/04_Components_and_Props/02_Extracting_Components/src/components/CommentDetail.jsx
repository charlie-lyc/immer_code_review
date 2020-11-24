import React from "react";

function CommentDetail(props) {
  return (
    <div>
      <div className="Comment-date">{props.date}</div>
      <div className="Comment-text">{props.text}</div>
    </div>
  );
}

export default CommentDetail;
