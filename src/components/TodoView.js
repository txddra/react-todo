import React from 'react'
import {arrayOf, shape, string} from 'prop-types'

const TodoView = ({todoList,
nameString, 
age, }) => {
    return (
      
            <ul style={{listStyle:"none"}}>
        {todoList.map(({id, todo})=>{ 
           
            return <li key={id}>{todo}</li>  
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

export default TodoView
