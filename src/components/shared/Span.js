import React from "react";

const Span = ({
    value, 
    id, 
    onClickFromDelete, 
    className,
    disabledClass, 
    disabledEdit
})=>{

    //disables the delete button
    let spanDisabledDeleteButton = disabledEdit ? disabledClass : "";
    let spanOnClick = onClickFromDelete ? onClickFromDelete: ""
    return(
    <Span 
    className={`${className} ${spanDisabledDeleteButton}`} 
    onClick ={()=>spanOnClick (id)}>
        {value}
    </Span>
    );
}

export default Span;