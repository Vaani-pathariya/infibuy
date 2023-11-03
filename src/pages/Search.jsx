import React,{useContext, useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import data from "../data/products.json"
import SearchCard from "../components/SearchCard";
import Paging from "../components/PagingDisplay";
import { FlexedSearch ,Div1,Div2, ButtonFilters,DivInside,Hr} from "../styles/search";
import noteContext from "../context/notes/noteContext";
const Search=()=>{
    function isElementInArray(element, array) {
        return array.includes(element);
      }      
    const {inputValue,selectedOption,handleInputChange,handleOptionChange,refreshCount,active,handleActive,price,handlePrice}=useContext(noteContext)
    const women=["Jahnvi","Nike","Helen"]
    const men=["Sagar","Nike","H&M"]
    const all=["Jahnvi","Nike","Helen","Sagar","H&M"]
    const [brand,setBrand]=useState([]);
    useEffect(()=>{
        if (selectedOption=='All')
        {
            setBrand(all);
        }
        if (selectedOption=='Men clothing'){
            setBrand(men);
        }
        if (selectedOption=='Women clothing'){
            setBrand(women);
        }
    },[refreshCount,selectedOption])
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
                {
                    brand.map((data)=>
                    <ButtonFilters value={data} onClick={()=>handleActive(data)}>{data}</ButtonFilters>
                    )
                }
                <h3>Price Range</h3>
                <ButtonFilters onClick={()=>handlePrice('less')}>Below 500</ButtonFilters>
                <ButtonFilters onClick={()=>handlePrice('above')}>Above 500</ButtonFilters>
            </Div1>
            <Div2>
                <DivInside>
                {
                    data.map((data)=>{
                    if(price==''){ 
                    if (active!=''){
                        if (active==data.description){
                            return <SearchCard imgSrc={data['img']} title={data['title']} description={data['description']} price={data['price']}/>
                        }
                    }
                    else {
                        if (selectedOption=='All')
                        {
                            return <SearchCard imgSrc={data['img']} title={data['title']} description={data['description']} price={data['price']}/>
                        }
                        if (selectedOption=='Men clothing'){
                            if (isElementInArray(data.description,men)&& data.gender=='men'){
                                return <SearchCard imgSrc={data['img']} title={data['title']} description={data['description']} price={data['price']}/>
                            }
                        }
                        if (selectedOption=='Women clothing'){
                            if (isElementInArray(data.description,women) && data.gender=='women'){
                                return <SearchCard imgSrc={data['img']} title={data['title']} description={data['description']} price={data['price']}/>
                            }
                        }
                    }
                }
                else {
                    if (price=='less'){
                        if (data.price<=500){
                            return <SearchCard imgSrc={data['img']} title={data['title']} description={data['description']} price={data['price']}/>
                        }
                    }
                    if (price=='above'){
                        if (data.price>=500){
                            return <SearchCard imgSrc={data['img']} title={data['title']} description={data['description']} price={data['price']}/>
                        }
                    }
                }
                }
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