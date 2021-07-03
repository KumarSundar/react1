import React from "react"

export default class Array extends React.Component{
  constructor(){
    super();
    this.state={
      arr:[20,40,50]
    }
  }
  render(){
    return(
      <div>
      {this.state.arr.map((item,i)=>{
        return(
          <h1>{item}</h1>
        )
      })}
      </div>
    )
  }
}