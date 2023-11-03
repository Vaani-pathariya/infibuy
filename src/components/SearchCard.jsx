import React from "react";
import { DisplayCard ,CardImg,CardBelow,FontBelow} from "../styles/displayCard";
const SearchCard=(props)=>{
    return (
        <DisplayCard>
            <CardImg src={props.imgSrc}></CardImg>
            <CardBelow>
                <div>
                    <FontBelow>{props.title}</FontBelow>
                    <div>{props.description}</div>
                </div>
                <FontBelow>{props.price}</FontBelow>
            </CardBelow>
        </DisplayCard>
    )
    // image description title price
}
export default SearchCard;