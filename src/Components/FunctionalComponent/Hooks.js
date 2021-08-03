import React,{useState} from 'react'

function Hooks() {

const [name,setName]=useState("suprava");
const handleClick=()=>{
  setName("Rima");
}
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Hooks
