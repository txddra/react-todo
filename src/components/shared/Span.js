import React from "react";

const Span = ({
    onClickFromDelete, 
    value, 
    id, 
    classNameFromDelete,
    disabledClass, 
    disabledEdit
})=>{
    //disables  the delete button
    let spanDisabledDeleteButton = disabledEdit ? disabledClass : "";
    return(
    <Span 
    className={`${classNameFromDelete} ${spanDisabledDeleteButton}`} 
    onClick ={()=> onClickFromDelete(id)}>
        {value}
    </Span>
    );
}

export default Span