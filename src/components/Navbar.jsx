import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Logo, Nav, Side,Texts,Input,Select,Img,SearchImg} from "../styles/navbar";
import cart from "../assets/images/add-to-cart.png"
import account from "../assets/images/user.png"
const Navbar=()=>{
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <Nav>
            <Logo>Infibuy</Logo>
            <Texts>
            <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search your product"></Input>
            <Select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Category</option>
            <option value="Option 1">Men's clothing</option>
            <option value="Option 2">Women's clothing</option>
            </Select>
            <Link to="/search"><SearchImg>Search</SearchImg></Link>
            </Texts>
            <Side>
                <Img src={cart}></Img>
                <Img src={account}></Img>
            </Side>
        </Nav>
    )
}
export default Navbar;