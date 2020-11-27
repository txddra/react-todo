import React from "react";

const Span =({onClickFromDelete, value, id})=>{
    return <span onClick ={()=> onClickFromDelete(id)}>{value}</span>

}

export default Span