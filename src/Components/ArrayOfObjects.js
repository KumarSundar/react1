import React from "react"
export default class ArrayOfObjects extends React.Component{
  constructor(){
    super();
    this.state={
      arr:[
        {
          name:"suprava",
          city:"bbsr"
        },
        {
          name:"supriya",
          city:"ctc"
        },
        {
          name:"sita",
          city:"delhi"
        },
        {
          name:"riya",
          city:"bbsr"
        }
      ]
    }
  }

  handlePush=()=>{
    var temp=this.state.arr
    temp.push({
      name:"rita",
      city:"puri"
    })
    this.setState({
      arr:temp
    })
  }

  handlePop=()=>{
    var temp=this.state.arr
    temp.pop()
    this.setState({
      arr:temp
    })
  }
  render(){
    return(
      <div>
          <table>
          <thead>
            <tr>
              <th>name</th>
              <th>city</th>
            </tr>
            </thead>
           
            {this.state.arr.map((item,i)=>{ 
              return(
                <>
                <tbody key={i}>
                <tr >
                <td>{item.name}</td>
                <td>{item.city}</td>
              </tr>
              </tbody>
                </>
              )
              
            })}
            <button onClick={this.handlePush}>PUSH </button>
            <button onClick={this.handlePop}>POP </button>
            
          </table>
      </div>
    )
  }
}