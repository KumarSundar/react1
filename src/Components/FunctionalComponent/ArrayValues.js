import React from 'react'

function ArrayValues() {
  const user = [
    {
      fname: "suprava",
      lname:"padhi"
    },
    {
      fname: "Rima",
      lname:"Mishra"
    }
  ]
  const[fullName,setFullName]=React.useState(user);
  const handleReset=()=>{
    setFullName([]);
  }
  return (
    <div>
        {fullName.map((item,i)=>{
          return(
          <h1>name:{item.fname}{item.lname}</h1>
          )
        })}
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default ArrayValues
