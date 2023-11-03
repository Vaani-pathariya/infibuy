import React from "react";
import styled from "styled-components";
const FlexedSearch=styled.div`
display: flex;
`
const Div1=styled.div`
background-color: antiquewhite;
width: 15%;
padding: 20px 10px;
font-family: 'Fira Sans', sans-serif;
font-family: 'Poppins', sans-serif;
`
const ButtonFilters=styled.button`
background-color: #f2b78f;
width: 100%;
text-align: left;
border:  none;
border-radius: 5px;
padding: 4px;
`
const DivInside=styled.div`
display: grid;
grid-template-columns: 30% 30% 30%;
grid-gap: 1rem;
justify-content: space-between;
padding: 2%;
`
const Hr=styled.hr`
padding: 0;
margin: 0;
`
const Div2=styled.div`
width: 80%;
margin-left: 10px;
padding: 20px 10px ;
`
export {FlexedSearch,Div1,Div2,ButtonFilters,DivInside,Hr};