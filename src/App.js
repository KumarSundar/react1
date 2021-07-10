import React from "react"
import Demo from "./Components/Demo"
import Demo2 from "./Components/Demo2"
import { SecondDemo } from "./Components/Demo"
import PassingProps from "./Components/PassingProps"
import StateVariable from "./Components/StateVariable"
import EventHandling from "./Components/EventHandling"
import Add from "./Components/Add"
import Array from "./Components/Array"
import ArrayOfObjects from "./Components/ArrayOfObjects"
import ConditionalRenderning from "./Components/ConditionalRenderning"
import Main from "./Components/LifeCycle/Main"
export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Demo />
      <SecondDemo/> */}
      {/* <PassingProps name="suprava" roll={100} /> */}
      {/* <StateVariable/> */}
      {/* <EventHandling/> */}
      {/* <Add/> */}
      {/* <Array/> */}
      {/* <ArrayOfObjects/> */}
      {/* <ConditionalRenderning/> */}
      <Main/>
      </div>

    )
  }
}