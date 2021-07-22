import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Component .welcome {this.props.name}</h1>
      </div>
    )
  }
}

export default Home
