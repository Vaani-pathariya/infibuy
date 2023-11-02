import styled from "styled-components";
import "../fonts.css"
const Nav=styled.nav`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 20px;
`
const Side=styled.div`
display: flex;
justify-content: space-between;
`
const Logo=styled.div`
font-family: New;
font-size: 30px;
margin-left: 20px;
`
const Texts=styled.div`
width: 50%;
`
const Input=styled.input`
height: 60%;
width: 70%;
margin-top: 10px;
border-radius: 10px 0 0 10px;
border: 1px solid black;
padding-left: 10px;
`
const Select=styled.select`
height: 66%;
width: 25%;
margin-top: 10px;
border-radius: 0 10px 10px 0;
border: 1px solid black;
padding-left: 10px;
`
const Img=styled.img`
height: 35px;
margin-top: 10px;
margin-right: 20px;
`
export {Nav,Side,Logo,Texts,Input,Select,Img};