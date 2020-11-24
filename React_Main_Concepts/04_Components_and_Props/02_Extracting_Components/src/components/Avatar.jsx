import React from "react";

function Avatar(props) {
  return <img className="Avatar" src={props.avatarUrl} alt={props.altName} />;
}

export default Avatar;
