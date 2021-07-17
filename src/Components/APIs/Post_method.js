import React, { Component } from 'react'

export class Post_method extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
  }

  handleChangeEmail=(event)=>{
    this.setState({
      email:event.target.value
    })
  }
  handlePassword=(event)=>{
    this.setState({
      password:event.target.value
    })
  }
  handleClick=()=>{
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    }).then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
    })
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="enter email" onChange={this.handleChangeEmail}></input>
        <input type="password" placeholder="password" onChange={this.handlePassword}></input>
        <button onClick={this.handleClick}>login</button>
      </div>
    )
  }
}

export default Post_method
