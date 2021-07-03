import React from "react"

export default class Add extends React.Component{

  constructor(){
    super();
    this.state={
      num1:0,
      num2:0,
      sum:0,
      // text:{
      //     email:"suprava@gmail.com"
      // }

    }
  }

  handleChange1=(event)=>{
    this.setState({
      num1:event.target.value

    })
  }
  // handleChange3=(event)=>{
  //   this.setState({
  //     text:{email:event.target.value}
  //   })
  // }
  handleChange2=(event)=>{
    this.setState({
      num2:event.target.value
    })
  }
  handleClick=()=>{
    this.setState({
      sum:parseInt(this.state.num1)+parseInt(this.state.num2)
    })
  }
  render(){
    return(
      <div>
          <input
           value={this.state.num1}
           onChange={this.handleChange1}
          />
          <input 
            value={this.state.num2}
            onChange={this.handleChange2}
          />
          <input 
            
            onChange={this.handleChange3}
          />
          <button onClick={this.handleClick}>+</button>
          <h1>result={this.state.sum}</h1>
          {/* <h1>{this.state.text.email}</h1> */}
      </div>
    )
  }
}