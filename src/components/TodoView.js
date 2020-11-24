import React from 'react'
import {arrayOf, shape, string} from 'prop-types'

import "./TodoView.css"

const TodoView = ({todoList,
    deletionHandle,
    editHandle,
    onChangeHandler,
    editValue,
    disabledEdit,
nameString, 
age}) => {

    //pass the unique id through 
    const deleteButtonHandle =(id)=>{
deletionHandle(id)
    }

    //edit
    // const editButtonHandle =(id)=>{
    //     editHandle(id)
    // }

    return (
    
    <ul style={{listStyle:"none"}}>
        {todoList.map(({ id, todo, editToggle })=>{ 
            return (
            <li key={id} style={{margin:20}}>
                {/* {todo}{" "} */}

            {editToggle ? ( <input 
            type="text" 
            value={editValue}
            name="editValue"
            onChange ={()=> onChangeHandler()} 
            />):(
                
                <span> {todo}  </span>
                )}

        {editToggle ? ( <span className="todo-button-shared-style edit-button">
                    Update
</span>):(
                    <span onClick={()=>editHandle(id)} className={`todo-button-shared-style edit-button ${disabledEdit ? "disabled": ""}` }>
                Edit 
            </span>

                )
            }

            <span onClick={()=> deleteButtonHandle(id)} className="todo-button-shared-style delete-button" >
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
