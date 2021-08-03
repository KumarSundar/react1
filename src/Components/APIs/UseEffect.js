import React,{useEffect} from 'react'

function UseEffect() {
  const[user,setUser]=React.useState([])
  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2").then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
     setUser(result.data)
    })
  })
  return (
    <div>
      {
        user.map((item,i)=>{
          return(
            <div>
            <h1>{item.email}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default UseEffect
