import React, { Component } from 'react'

const styles={
    heading:{
      color:"blue",
      backgroundColor:"red"
    }
}
export class CssObject extends Component {
  
  render() {
    return (
      <div>
        <h1 style={styles.heading}>Good evening</h1>
      </div>
    )
  }
}

export default CssObject
