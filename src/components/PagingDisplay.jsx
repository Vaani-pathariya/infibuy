import React from "react";
import { DivPaging, PagingDiv,Hr } from "../styles/paging";
const Paging=()=>{
    return (
        <PagingDiv>
            <div>Previous</div>
            <Hr></Hr>
            <DivPaging>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </DivPaging>
            <Hr></Hr>
            <div>Next</div>
        </PagingDiv>
    )
}
export default Paging;