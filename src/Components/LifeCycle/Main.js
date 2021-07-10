import React, { Component } from 'react'
import Child from "./Child"
export class Main extends Component {
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  render() {
    return (
      <div>
      {this.state.show &&
        <Child/>
      }
      <button onClick={()=>{
        this.setState({
          show:!this.state.show
        })
      }}>HIDE</button>
        
      </div>
    )
  }
}

export default Main
