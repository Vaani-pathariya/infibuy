import React from "react";
import Navbar from "../components/Navbar";
import data from "../data/products.json"
import SearchCard from "../components/SearchCard";
import Paging from "../components/PagingDisplay";
const Search=()=>{

    console.log(data[0]['img']);
    return (
        <div>
            <Navbar/>
            Hello I am search page
            {/* <img src={data[0]['img']}></img> */}
            <SearchCard/>
            <Paging/>
        </div>
    )
}
export default Search;