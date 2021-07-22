import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    // console.log(this.props.match.params.id)

    console.log(this.props.location.values.email)
    return (
      <div>
        <h1>Contact Page</h1>
        <input/>
      </div>
    )
  }
}

export default Contact
