import React, {Component} from 'react';
// import v4 from './V4'
//importing the unique id module
import {v4 as uuidv4} from "uuid"
import TodoView from './components/TodoView'
export default class App extends Component{
  state = {
    todoList:[
      { 
        //makes the i.d. into a unique i.d. so that the numbers are not hardcoded and breaks the app.
        id:uuidv4(),
        todo:"",
      }

    ],

    todoValue:"",
    // a state that shows an error
    errorMessageAlert: false,


    
  }

  // function that will execute
inputChangeHandler = (event) => {
//doesn't hard code the todo Value
//will manipulate event.target.name
this.setState({
  [event.target.name]: event.target.value
})
}
//this is the function that makes the button work
submitHandler=(event)=>{
  // prevents hard refresh from the browser
  event.preventDefault();

//this will make it so that when something isn't in the text box
//and the submit button is clicked, it will produce an error message, otherwise, render the todo
 if(this.state.todoValue.length === 0){
  this.setState({
    errorMessageAlert: true
  });
  return;
 }

let newTodoObj ={
  id:uuidv4(),
  //this needed to change from the obj and set it to todo 
  todo: this.state.todoValue

}

  //
let newArray = [...this.state.todoList, newTodoObj];


this.setState({
  todoList: newArray,
  //will clear things out
  todoValue:"",
})
 
}
  
render(){
  //destructuring
  const {
    todoList,
  errorMessageAlert
}= this.state;

return (
// alters the alignment of the div
<div style ={{textAlign:"center"}}>
{/* this will only work if no value is passed, but add is pressed */}
{errorMessageAlert ? (<div>Please enter a value </div> ) : null}

  {/* creates a text field */}
  {/* adds an action for when text is entered */}

  <input onChange ={this.inputChangeHandler} 
  style={{marginTop : 20}} 
  type="text" 
  // the values have to match the state in order to work
  name="todoValue"
  //this will help the words disappear after the add button
  value ={this.state.todoValue}
/>{" "}
  {/* adds a button on the side */}
  {/* onClick triggers the submit function and makes the button function */}
  <button onClick={this.submitHandler}>Add</button>
{/* removes bullet points from list */}
  {/* <ul style={{listStyle:"none"}}> */}

  {/* loops through the given array of and renders or extracts the values of the todo */}



<TodoView todoList={todoList}/>
</div>
)
 } 
  } 




