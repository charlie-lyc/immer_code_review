import React from "react";

class Clock extends React.Component {
  /* 'this.state', 'this.setState()' 이용
    (1) construtor() 호출하고 props 전달
    (2) super() 호출하고 props 전달
    (3) 메소드 사용전에 미리 .bind(this)를 적용해 놓거나, 아니면 사용시 적용
  */
  constructor(props) {
    console.log('생성될 때');
    super(props);
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }
  /********************************************/
  /* 앞서 배운대로 class component 형식으로 작성하면 아래와 같은데,
    시계는 작동되지 않는다. 그래서 도입하게 된 것이 '생명주기' 개념이다. */
  /*** Add Lfecycle Methods ***/
  componentDidMount() {
    console.log('화면에 등장한 후');
    this.timerID = setInterval(this.tick, 1000);
    // this.timerID = setInterval(this.tick.bind(this), 1000);
  }
  componentDidUpdate() {
    console.log('새로운 상태를 갖고 난 후')
  }
  componentWillUnmount() {
    console.log('화면에서 사라지기 전');
    clearInterval(this.timerID);
  }
  /*******************************************/
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    console.log('렌더링될 때');
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
