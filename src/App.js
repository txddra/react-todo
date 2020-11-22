import {Component} from 'react';

export default class App extends Component{
  state={
    todoList:[
      { 
        id:"",
        todo:"",
      }

    ]


    
  }
  
  render(){
return (
// alters the alignment of the div
<div style ={{textAlign:"center"}}>
  {/* creates a text field */}
  <input type="text" name="todo"/>
  {/* adds a button on the side */}
  <button>Add</button>
{/* removes bullet points from list */}
  <ul style={{listStyle:"none"}}>

  </ul>
  {/* loops through the given todos and renders the values of the todo */}
  lol @ {this.state.todoList.map(({id, todo})=>{
  return <li key={id}>{todo}</li> 
})} </div>
  )

  }
  }

  
  //what actually shows up on the page



// export default App;
