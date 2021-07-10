import React, { Component } from 'react'

export class Child extends Component {
  constructor(){
    super();
    this.state={
      input_text:""
    }
  }

  componentDidMount(){
    console.log("hello from component did mount method")
  }
  componentDidUpdate(){
    console.log("hello from component did update method")
  }
  componentWillUnmount(){
    console.log("componentwillunmount")
  }
  render() {
    console.log("render function")
    return (
      <div>
        hello from child component
        <h1>heading</h1>
        <input onChange={(event)=>{
          this.setState({
            input_text:event.target.value
          })
        }}></input>
      </div>
    )
  }
}

export default Child
