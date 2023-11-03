import styled from "styled-components";
const Banner=styled.img`
width: 100%;
height: 100vh;
position: relative;
display: inline-block;
`
const LowerBanner=styled.div`
padding: 30px;
`
const ShopNow=styled.div`
background-color: white;
color: black;
width: 100px;
text-align: center;
font-size: larger;
padding: 10px;
margin-top: 10px;
border-radius: 5px;
`
const Bigger=styled.div`
font-size: 50px;
font-weight: 900;
`
const Flex=styled.div`
display: flex;
font-family: 'Fira Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-weight: bold;
`
const Design=styled.div`
width: 4px;
background-color: purple;
margin-right: 10px;
`
const FlexSpace=styled.div`
margin-top: 50px;
display: flex;
padding: 0 50px;
justify-content: space-between;
`
const Overtext=styled.div`
position: absolute;
  top: 300px;
  left: 10%;
  color: white;
  padding: 10px;
  font-family: 'Fira Sans', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`
export {Banner,ShopNow,LowerBanner,Flex,Design,FlexSpace,Overtext,Bigger}