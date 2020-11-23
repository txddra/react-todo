import React from 'react'
import {arrayOf, shape, string} from 'prop-types'

import "./TodoView.css"

const TodoView = ({todoList,
    deletionHandle,
nameString, 
age, }) => {

    //pass the unique id through 
    const deleteButtonHandle =(id)=>{
// deletionHandle()
    }


    return (
    
    <ul style={{listStyle:"none"}}>
        {todoList.map(({id, todo})=>{ 
           
            return (<li key={id} style={{margin:20}}>{todo}{" "}
            <span className="todo-button-shared-style edit-button" >
                Edit
            </span>

            <span  onClick={()=> deleteButtonHandle(id)}className="todo-button-shared-style delete-button" >
                Delete

                </span>
                </li>  
                
                )
        } 
    )
} 
    </ul> 
    )
    
}
// introducing prop types
TodoView.propTypes = {
    todoList: arrayOf(
        shape({
            id: string.isRequired,
            todo:string.isRequired

        })
    )
   

}

export default TodoView;
