import React, { Component } from 'react'

export class Post_method extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
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
        <input type="text" placeholder="enter email"></input>
        <input type="password" placeholder="password"></input>
        <button onClick={this.handleClick}>login</button>
      </div>
    )
  }
}

export default Post_method
