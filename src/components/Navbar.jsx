import React,{useState,useContext} from "react";
import noteContext from "../context/notes/noteContext";
import { Link } from "react-router-dom";
import {Logo, Nav, Side,Texts,Input,Select,Img,SearchImg} from "../styles/navbar";
import cart from "../assets/images/add-to-cart.png"
import account from "../assets/images/user.png"
const Navbar=()=>{
    const {inputValue,selectedOption,handleInputChange,handleOptionChange,refreshCount,handleClick}=useContext(noteContext)
    return (
        <Nav>
            <Logo>Infibuy</Logo>
            <Texts>
            <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search your product"></Input>
            <Select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Category</option>
            <option value="All">All</option>
            <option value="Men clothing">Men's clothing</option>
            <option value="Women clothing">Women's clothing</option>
            </Select>
            <Link to="/search"><SearchImg onClick={handleClick}>Search</SearchImg></Link>
            </Texts>
            <Side>
                <Img src={cart}></Img>
                <Img src={account}></Img>
            </Side>
        </Nav>
    )
}
export default Navbar;