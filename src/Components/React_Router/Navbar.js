import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Button} from "@material-ui/core"
export class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/" style={{textDecoration:"none"}}>
        <Button
        style={{marginRight:5}}
        variant="contained"
        color="secondary"
        size="small"
        >Home</Button>
        </Link>
        <Link to="/about" style={{textDecoration:"none"}}>
        <Button
         style={{marginRight:5}}
        variant="outlined"
        color="secondary"
        size="small"
        >About</Button>
        </Link>
        <Link to="/contact" style={{textDecoration:"none"}}>
        <Button
         style={{marginRight:5}}
        variant="contained"
        color="secondary"
        size="small"
        >Contact</Button>
        </Link>
  
      </div>
    )
  }
}

export default Navbar
