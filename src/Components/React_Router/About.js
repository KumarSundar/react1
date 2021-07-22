import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 class About extends Component {
  constructor(){
    super();
    this.state={
      id:2,
      name:"suprava padhi",
      email:"suprava@gmail.com"
    }
  }
  render() {
    return (
      <div>
      {/* <Link to={"/contact/"+this.state.id}>pass id to contact</Link> */}

        <Link 
        to={{
          pathname:"/contact",
          values:{
            id:this.state.id,
            name:this.state.name,
            email:this.state.email
          }
        }}>pass object to contact</Link>

        <h1>About Page</h1>
      </div>
    )
  }
}

export default About
