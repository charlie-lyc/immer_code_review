import React from "react";

function Mailbox(props) {
  return (
    <div>
      <h1>Hello!</h1>
      {props.unreadMessages.length > 0 && (
        <h2>You have {props.unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

export default Mailbox;
