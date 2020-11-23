import React from 'react'
import {arrayOf, shape, string} from 'prop-types'

const TodoView = ({todoList,
nameString, 
age, }) => {
    return (
      
            <ul style={{listStyle:"none"}}>
        {todoList.map(({id, todo})=>{ 
           
            return (<li key={id} style={{margin:20}}>{todo}{" "}
            <span style= {{
                margin: 10,
                padding: 5,
                backgroundColor: "orange",
                color: "white",
                borderRadius:5

            }

            }
            >
                Edit
            </span>
                <span 
                style={{
                    margin: 10,
                    padding: 5,
                    backgroundColor: "#fff44f",
                    color: "white",
                    borderRadius:5,
                }
            }  
                >
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
