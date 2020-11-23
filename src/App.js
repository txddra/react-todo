import React, {Component} from 'react';

export default class App extends Component{
  state={
    todoList:[
      { 
        id:"",
        todo:"",
      }

    ],
    todoValue:"",


    
  }

  // function that will execute
inputChangeHandler = (event) => {
//doesn't hardcode the todo Value
//will manipulate event.target.name
this.setState({
  [event.target.name]: event.target.value
})
}
//this is the function that makes the button work
submitHandler=(event)=>{
  // prevents hard refresh from the browser
  event.preventDefault();

  

}
  
  render(){
return (
// alters the alignment of the div
<div style ={{textAlign:"center"}}>
  {/* creates a text field */}
  {/* adds an action for when text is entered */}

  <input onChange ={this.inputChangeHandler} style={{marginTop : 20}} type="text" name="todo"/>{" "}
  {/* adds a button on the side */}
  {/* makes the button function */}
  <button onClick={this.submitHandler}>Add</button>
{/* removes bullet points from list */}
  <ul style={{listStyle:"none"}}>

  {/* loops through the given array of and renders or extracts the values of the todo */}
  lol @ {this.state.todoList.map(({id, todo})=>{
    //tracks the id
    return <li key={id}>{todo}</li> 
  })}
  </ul>
   </div>
  )

  }
  }

  
  //what actually shows up on the page



// export default App;
