import React, { Component } from 'react'
import { BrowserRouter,Route,Link,Switch,Redirect } from 'react-router-dom'
import Home from "./Home"
import About from './About'
import Contact from './Contact'
export class Routing extends Component {
  render() {
    return (
      <div>
     
        <BrowserRouter>
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Switch>
          <Route exact path="/" component={Home}>
            {/* <Home></Home> */}
          </Route>
          <Route exact path="/about" component={About}>
            {/* <About/> */}
          </Route>
          <Route exact path="/contact" component={Contact}>
            {/* <Contact/> */}
            </Route>
            <Redirect to="/"></Redirect>
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routing
