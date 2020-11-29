import React from 'react'
import {arrayOf, shape, string} from 'prop-types'

import "./TodoView.css"
//this is the span that we use to refactor the delete
import Span from './shared/Span'

const TodoView = ({todoList,
    deletionHandle,
    editHandle,
    onChangeHandler,
    editValue,
    disabledEdit,
    updateSubmitHandle,
nameString, 
age}) => {

    //pass the unique id through 
    const deleteButtonHandle =(id)=>{
deletionHandle(id)
    };
    
    const onChangeHandlerButton =(id)=>{
        onChangeHandler(id)
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

            {editToggle ? ( 
            <input 
            type="text" 
            value={editValue}
            name="editValue"
            onChange ={(event)=> onChangeHandlerButton(event)} 
            />
            ):(
                
                <span> {todo}  </span>
                )
            }

        {editToggle ? ( 
        <span onClick={()=> onChangeHandler(id)} className="todo-button-shared-style edit-button">
                    Update
</span>
):(
        <span onClick={()=>editHandle(id)} 
        className={`todo-button-shared-style edit-button
          ${disabledEdit ? "disabled" : ""}`}>
            Edit 
        </span>

    )
            }
            {/* old code: */}

            {/* <span onClick={()=> deleteButtonHandle(id)} className="todo-button-shared-style delete-button" >
                Delete

                </span> */}

                {/* new, refactored code: */}
                <Span
                value={"Delete"}
                id={id}
                onClickFromDelete={deleteButtonHandle}
                className= {`todo-button-shared-style delete-button`}
                disabledClass ="disabled"
                disabledEdit ={disabledEdit}
                />

                
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
