import React from "react";

function ListItem(props) {
  return (
    /*** Wrong!: 크롬 콘솔창에서 확인해 보면 키값으로 제대로 전달되지 않는다. ***/
    // <li key={props.value.toString()}>{props.value}</li>
    /*** There is no need to specify the key here ***/
    <li>{props.value}</li>
  );
}

function NumberList(props) {
  const listItems = props.numbers.map((number) => (
    /***  Wrong!: 'key'는 JSX에만 적용되는 속성이다. 반드시 JSX에서 작성해야 그 값이 Component에 전달된다. 
      (1) 크롬 브라우저에 React Dev Tool 을 설치하고 Component에서 확인할 수 있다.
      (2) 일반적으로 ID의 역할을 하는 데이터를 할당해야 한다.
      (3) 콜백함수의 'index'를 이용할 수 있지만 권장하지 않는다.
    ***/
    // <ListItem value={number} />
    /*** The key should have been specified here ***/
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

export default NumberList;
