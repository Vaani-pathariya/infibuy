import React,{useState} from "react";
import NoteContext from "./noteContext";
const NodeState=(props)=>{
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('All');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const [refreshCount, setRefreshCount] = useState(0);

    const handleClick = () => {
        setRefreshCount(refreshCount + 1);
        setActive('')
        setPrice('')
    };
    const [currentPage,setCurrentPage]=useState(1)
    const handlecurrent=()=>{
        setCurrentPage(currentPage+1)
    }
    const [active,setActive]=useState('')
    const handleActive=(value)=>{
        setActive(value);
        setPrice('');
    }
    const [price,setPrice]=useState('');
    const handlePrice=(value)=>{
        setPrice(value);
    }
    const state={
        inputValue,selectedOption,handleInputChange,handleOptionChange,refreshCount,handleClick,active,handleActive,price,handlePrice,currentPage,handlecurrent
    }
    
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NodeState;