import React from "react";

const Span = ({
    value, 
    id, 
    onClickFromDelete, 
    classNameFromDelete,
    disabledClass, 
    disabledEdit
})=>{
    //disables t he delete button
    let spanDisabledDeleteButton = disabledEdit ? disabledClass : "";
    let spanOnClick = onClickFromDelete ? onClickFromDelete: ""
    return(
    <Span 
    className={`${classNameFromDelete} ${spanDisabledDeleteButton}`} 
    onClick ={()=>spanOnClick (id)}>
        {value}
    </Span>
    );
}

export default Span