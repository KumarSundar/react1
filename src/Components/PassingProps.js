import React from "react";

export default class PassingProps extends React.Component{

  render(){
    console.log(this)
    const{name,roll}=this.props
    return(
      <>
      <h1>welcome to nextstacks {name} and your roll number is {roll}</h1>
       <h1>welcome to nextstacks {this.props.name} and your roll number is {this.props.roll}</h1>
       </>
    )
  }
}