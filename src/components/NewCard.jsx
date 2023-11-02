import React from "react";
const NewCard=(props)=>{
    return(
        <div>
            <img src={props.img}></img>
            <div>{props.text}</div>
        </div>
    )
}
export default NewCard;