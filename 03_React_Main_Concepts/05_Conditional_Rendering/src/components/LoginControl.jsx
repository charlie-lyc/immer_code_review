import React from "react";
import Greeting from "./Greeting";
import Mailbox from "./Mailbox";
import Page from "./Page";

function LoginButton(props) {
  return <button onClick={props.onClick}>LogIn</button>;
}
function LogoutButton(props) {
  return <button onClick={props.onClick}>LogOut</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  /***  In line Expression, using Conditional Ternary Operator
      If 구문은 삼항연산자를 이용하여 간략하게 나타낼 수 있다.
      => "<condition> ? <true> : <false>"
  ***/
  /***  In line Expression, using '&&' Operator
      만약 "<condition> ? <true> : <null>" 이런 식의 표현이라면 '&&' 연산자를 이용하여 더 간략하게 나타낼 수 있다.
      => "<condition> && <true>"
  ***/
  render() {
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
        {this.state.isLoggedIn && (
          <Mailbox unreadMessages={["React", "Re: React", "Re:Re: React"]} />
        )}
        <p>
          You're <b>{!this.state.isLoggedIn && "not"}</b> logged in.
        </p>
        <hr />
        <br />
        <Page />
      </div>
    );
  }
  /*** Out of line, If Statement ***/
  // render() {
  //   let button;
  //   let mailbox;
  //   if (this.state.isLoggedIn) {
  //     button = <LogoutButton onClick={this.handleLogoutClick} />;
  //     mailbox = (
  //       <Mailbox unreadMessages={["React", "Re: React", "Re:Re: React"]} />
  //     );
  //   } else {
  //     button = <LoginButton onClick={this.handleLoginClick} />;
  //   }
  //   return (
  //     <div>
  //       <Greeting isLoggedIn={this.state.isLoggedIn} />
  //       {button}
  //       {mailbox}
  //       <hr />
  //       <br />
  //       <Page />
  //     </div>
  //   );
  // }
}

export default LoginControl;
