import React from "react";
import SideBarItem from "./SideBarItem";
import Post from "./Post";

/* "key" 는 JSX에서만 사용되는 고유한 속성이지만 브라우저상에서 나타낼수 없으므로
  데이터의 "id"를 같이 병행해서 사용한다.  */
function Blog(props) {
  return (
    <div>
      <ul>
        {props.posts.map((post) => {
          return <SideBarItem key={post.id} id={post.id} postData={post} />;
        })}
      </ul>
      <hr />
      {props.posts.map((post) => {
        return <Post key={post.id} id={post.id} postData={post} />;
      })}
    </div>
  );
}

export default Blog;
