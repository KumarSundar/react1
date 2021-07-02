import React from "react"

export default class EventHandling extends React.Component{
  constructor(){
    super();
    this.state={
      input_text:"",
      name:"suprava",
      arr:["sima","sony"]

    }
  }

  handleChange=(event)=>{
    this.setState({
      input_text:event.target.value
    })
  }

  handleClick=()=>{
    this.setState({
      name:"suprava padhi"
    })
  }
  render(){
    return(
      <div>
        <input 
        type="text"
        onChange={this.handleChange}
        />
        <h1>{this.state.input_text}</h1>
        <button onClick={this.handleClick}>click me</button>
        <p>{this.state.name}</p>
        <p>{this.state.arr}</p>
      </div>
    )
  }
}