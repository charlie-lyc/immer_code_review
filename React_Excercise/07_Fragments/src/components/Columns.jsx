import React from "react";

class Columns extends React.Component {
  render() {
    return (
      /* <div>의 역할을 하지만 렌더링에는 영향을 미치지 않는 JSX를 사용한다.*/
      // <React.Fragment>
      //   <td>Hello</td>
      //   <td>World</td>
      // </React.Fragment>
      /*** 또는 ***/
      <>
        <td>Hello</td>
        <td>World</td>
      </>
      /*** <div> 으로는 원하는 결과를 만들 수 없다. ***/
      // <div>
      //   <td>Hello</td>
      //   <td>World</td>
      // </div>
    );
  }
}
export default Columns;
