import React from 'react'
import {arrayOf, shape, string} from 'prop-types'

import "./TodoView.css"
//this is the span that we use to refactor the delete
import Span from '../shared/Span'

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
    /*todoViewHandleDeleteButton*/
    const deleteButtonHandle =(id)=>{
//from the parent(app.js)
deletionHandle(id)
    };
    
    const onChangeHandlerButton =(id)=>{
        onChangeHandler(id)
    }

    // edit
    // const editButtonHandle =(id)=>{
    //     editHandle(id)
    // }
    const updateSubmitHandlerButton =(id)=>{
        updateSubmitHandle(id)
    }

    return (
    
    <ul style={{listStyle:"none"}}>
        {todoList.map(({ id, todo, editToggle })=>{ 
            return (
            <li key={id} style={{margin:20}}>
                {/* {todo}{" "} */}

            {
            
            editToggle ? ( 
            <input 
            type="text" 
            value="{editValue}"
            name="editValue"
            onChange ={onChangeHandlerButton} 
            />
            ):(
                
                // <span> {todo}  </span>
                <Span value ={todo}/>
                )
            }

        {editToggle ? ( 

            <Span 
            value={"Update"}
            id={id}
            onClick={updateSubmitHandlerButton }
            className={`todo-button-shared-style edit-button`}
            disabledClass= "disabled"
            disabledButton ={disabledEdit}
//         <span onClick={()=> onChangeHandler(id)} className="todo-button-shared-style edit-button">
//                     Update
// </span>
):(


    <Span
    value={"Edit"}
    id ={id}
    onClick={editHandle}
    className ={`todo-button-shared-style edit-button`}
    disabledClass ="disabled"
    disabledButton ={disabledEdit}
    /> 
        // <span onClick={()=>editHandle(id)} 
        // className={`todo-button-shared-style edit-button
        //   ${disabledEdit ? "disabled" : ""}`}>
        //     Edit 
        // </span>

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
                onClick={deleteButtonHandle}
                className= {`todo-button-shared-style delete-button`}
                disabledClass ="disabled"
                disabledButton={disabledEdit}
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
