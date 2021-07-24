import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
const styles={
  heading:{
    color:"blue",
    backgroundColor:"red"
  },
  buttonStyles:{
    color:"blue",
    backgroundColor:"red",
    padding:20
  }

}

export class WithStyles_com extends Component {

  render() {
    const{classes}=this.props
    return (
      <div>
        <h1 className={classes.heading}>hello</h1>
        <button className={classes.buttonStyles}>click me</button>
      </div>
    )
  }
}

export default withStyles(styles) (WithStyles_com);
