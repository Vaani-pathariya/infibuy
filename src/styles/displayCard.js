import React from "react";
import styled from "styled-components";
const DisplayCard=styled.div`
font-family: 'Fira Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-weight: bold;
`
const CardImg=styled.img`
width: 100%;
height: 350px;
border-radius: 7px;
`
const CardBelow=styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
`
const FontBelow=styled.div`
font-size: 20px;
`
export {DisplayCard,CardImg,CardBelow,FontBelow}