import React, { Component } from 'react'

export class ConditionalRenderning extends Component {
  constructor(){
    super();
    this.state={
      isLoggedIn:false,
      input_text:""
    }
  }
  handleChange=(event)=>{
    this.setState({
      input_text:event.target.value
    })
  }
  render() {
    // if(this.state.isLoggedIn===true){
    //   return <h1>if statetemnt</h1>
    // }
    // else{
    //   return <h1>else statement</h1>
    // }
    return (
      <div>
        {/* {this.state.isLoggedIn===true?<h1>true statement</h1>:<h1>false statement</h1>} */}

        {/* {this.state.isLoggedIn===false &&
        <p>simple if statement</p>} */}
        <input onChange={this.handleChange}></input>
        <button disabled={this.state.input_text===""?true:false}>click me</button>
      </div>
    )
  }
}

export default ConditionalRenderning
