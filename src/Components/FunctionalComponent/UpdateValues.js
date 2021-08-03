import React from 'react'

function UpdateValues() {
  const [name,setName]=React.useState({fname:"sup",lname:"padhi"})
  const handleUpdate=()=>{
    setName({
       ...name,
      fname:"rima",
    })
  }
  return (
    <div>
      <input type="text" value={name.fname} onChange={(event)=>{
        setName({
          ...name,
          fname:event.target.value
        })
      }}/>
      <input type="text" value={name.lname} onChange={(event)=>{
        setName({
          ...name,
          lname:event.target.value
        })
      }}/>
      <h1>fname:{name.fname}</h1>
      <h1>lname:{name.lname}</h1>
      <button onClick={handleUpdate}>update</button>
    </div>
  )
}

export default UpdateValues
