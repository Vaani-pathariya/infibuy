import { Card, CardImg ,Next,Below} from "../styles/newCard";
import React from "react";
import next from "../assets/images/next.png"
const NewCard=(props)=>{
    return(
        <Card>
            <CardImg src={props.img}></CardImg>
            <Below>
            <div>{props.text}</div>
            <Next src={next}></Next>
            </Below>
        </Card>
    )
}
export default NewCard;