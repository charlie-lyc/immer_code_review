import React from "react";

import UserInfo from "./UserInfo";
import CommentDetail from "./CommentDetail";

function Comment() {
  return (
    <div className="Comment">
      <UserInfo name="Cahal" />
      <CommentDetail
        text="Hello, world! I'm into Software Engineer."
        date={new Date().toLocaleDateString()}
      />
    </div>
  );
}

/* Before Extraction */
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">{props.author.name}</div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{props.date}</div>
//     </div>
//   );
// }

export default Comment;
