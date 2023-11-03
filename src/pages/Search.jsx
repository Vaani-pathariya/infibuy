import React from "react";
import Navbar from "../components/Navbar";
import data from "../data/products.json"
import SearchCard from "../components/SearchCard";
import Paging from "../components/PagingDisplay";
import { FlexedSearch ,Div1,Div2, ButtonFilters,DivInside,Hr} from "../styles/search";
const Search=()=>{

    console.log(data[0]['img']);
    return (
        <div>
            <Navbar/>
            {/* <img src={data[0]['img']}></img> */}
            <Hr></Hr>
            <FlexedSearch>
            <Div1>
                <h3>Filters</h3>
                <hr></hr>
                <h3>Brands</h3>
                <ButtonFilters>hello</ButtonFilters>
                <h3>Price Range</h3>
                <ButtonFilters>hello</ButtonFilters>
            </Div1>
            <Div2>
                <DivInside>
                {
                    data.map((data)=>
                    <SearchCard imgSrc={data['img']} title={data['title']} description={data['description']} price={data['price']}/>
                    )
                }
                </DivInside>
            <Paging/>
            </Div2>
            </FlexedSearch>
        </div>
    )
}
export default Search;