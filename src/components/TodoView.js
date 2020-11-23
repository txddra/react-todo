import React from 'react'
import PropTypes from 'prop-types'

const TodoView = ({todoList}) => {
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

// TodoView.propTypes = {

// }

export default TodoView
