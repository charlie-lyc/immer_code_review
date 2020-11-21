import React from "react";
import "../styles.css";

function SideBarItem(props) {
  return (
    <li className="sidebar-item">
      {props.id}. {props.postData.title}
    </li>
  );
}

export default SideBarItem;
