import React, { Component } from 'react'
import { BrowserRouter,Route,Link,Switch,Redirect } from 'react-router-dom'
import Home from "./Home"
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
export class Routing extends Component {
  render() {
    return (
      <div>
     
        <BrowserRouter>
        <Navbar/>
        
        <Switch>
          {/* <Route exact path="/" component={Home}> */}
          <Route exact path="/" component={()=>(<Home name="suprava"/>)}>
            {/* <Home name="suprava"></Home> */}
          </Route>
          <Route exact path="/about" component={About}>
            {/* <About/> */}
          </Route>
          {/* <Route exact path="/contact/:id" component={(props)=>(<Contact {...props}/>)}> */}
          <Route exact path="/contact" component={(props)=>(<Contact {...props}/>)}>
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
