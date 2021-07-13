import React from "react"

export default class Fetch_data extends React.Component{
constructor(){
  super();
  this.state={
    user:[]
  }
}
  componentDidMount(){
    fetch("https://reqres.in/api/users?page=2").then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
      this.setState({
        user:result.data
      })
    })
  }
  render(){
    return(
      <div>
        {this.state.user.map((single,i)=>{
          return(
            <>
              {single.email}
              <img src={single.avatar} alt="image"></img>
            </>
          )
        })}
      </div>
    )
  }
}