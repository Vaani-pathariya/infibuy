import React from "react";
import styled from "styled-components";
const PagingDiv=styled.div`
background-color: antiquewhite;
width: 50%;
margin: auto;
height: fit-content;
border-radius: 10px;
padding: 15px;
font-family: 'Fira Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-weight: bold;
display: flex;
justify-content: space-between;
`
const Hr=styled.hr`
padding: 0;
margin: 0;
`
const DivPaging=styled.div`
display: flex;
justify-content: space-between;
width: 60%;
font-weight: lighter;
`
export {PagingDiv,DivPaging,Hr};