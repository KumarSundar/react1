import React from "react"

 class Demo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from demo component</h1>
        <p>welcome to nextstacks</p>
      </div>
    )
  }
}
export default Demo;

export class SecondDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello from demo component</h1>
        <p>welcome to nextstacks</p>
      </React.Fragment>
    )
  }
}

