import React from "react";

const Span = ({
    value, 
    id, 
    onClick, 
    className,
    disabledClass, 
    disabledButton
})=>{

    //disables the delete button
    let spanDisabledDeleteButton = disabledButton ? disabledClass : "";

    let spanOnClick = onClick ? 
    onClick: ()=>{}

    return(
    <Span 
    className={`${className} ${spanDisabledDeleteButton}`} 
    onClick ={()=>spanOnClick(id)}>
        {value}
    </Span>
    );
}

export default Span;