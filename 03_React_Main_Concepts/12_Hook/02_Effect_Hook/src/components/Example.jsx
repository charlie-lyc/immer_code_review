import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);
  // Lifecycle Methods인 "componentDidMount" 혹은 "componentDidUpdated"와 비슷하다.
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
