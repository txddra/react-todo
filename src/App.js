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
        todo:"Be the very best, that no one ever was.",
        editToggle: false
      }

    ],

    todoValue:"",
    // a state that shows an error
    errorMessageAlert: false,
    missingContentMessage:false,
    editInput:false,


    
  }

  // function that will execute
inputChangeHandler = (event) => {
  if(this.state.errorMessageAlert){
    this.setState({
      errorMessageAlert: false,
    })
  }
//doesn't hard code the todo Value
//will manipulate event.target.name
this.setState({
  [event.target.name]: event.target.value
})
}


//all the data comes from the parent


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
},//this will take away the error message and replace it with the newest added todo item
()=>{
  //if the length of the todo list is greater than 0, then remove the error message
  if(this.state.todoList.length>0){
this.setState({
  missingContentMessage:false
})
  }
})
 
}



deletionHandle=(targetID)=>{

  //make a copy of the array
let copiedArray = this.state.todoList

//filter out the elements of the copied array
let filteredArray = copiedArray.filter(({id})=>{
  return id !== targetID

});
//manipulate the state
this.setState({
  todoList: filteredArray
},
()=>{
  if(this.state.todoList.length === 0){
    this.setState({
      missingContentMessage: true,
    })
  }
})
}
//edit button
editHandle =(targetID)=>{

  let copiedArray = [...this.state.todoList];

  //looping through the array
  let updatedArray = copiedArray.map((item)=>{
    if(item.id === targetID){
      //toggles the edit button to update
      item.editToggle = true;
    }
    return item;
  });

  this.setState({
    todoList: updatedArray,
  })
}


onChangeHandler = ()=>{

}
  
render(){
  //destructuring
  const {
    todoList,
  errorMessageAlert,
  missingContentMessage,
  editValue
}= this.state;

return (
// alters the alignment of the div
<div style ={{textAlign:"center"}}>
{/* this will only work if no value is passed, but add is pressed */}
{errorMessageAlert ? (<div style= {{color: "orange"}}>Please enter a value </div> ) : null}

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

{/* ternary that shows an error message when there are no todos present */}

{missingContentMessage ?( <div style={{ align: "center",marginTop:10, padding:5, textDecoration:"underline", color:"orangered"}}>Please add items to your todo list!</div>
):

(
  //the child
<TodoView todoList={todoList}
deletionHandle ={this.deletionHandle}
editHandle = {this.editHandle}
onChangeHandler ={this.onChangeHandler}
editValue ={editValue}/>
)}
</div>
)
 } 
  } 




