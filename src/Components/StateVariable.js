import React from "react"

export default class StateVariable extends React.Component{
    constructor(){
      super();
      this.state={
        name:"suprava",
        email:"suprava@gmail.com",
        city:"bbsr"
      }
    }
  render(){
    return(
      <div>
          <h1>{this.state.name}</h1>
          <h1>{this.state.email}</h1>
          <h1>{this.state.city}</h1>
      </div>
    )
  }
}