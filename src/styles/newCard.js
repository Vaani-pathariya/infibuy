import styled from "styled-components";
const Card=styled.div`
font-family: 'Fira Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-weight: bold;
`
const CardImg=styled.img`
height: 350px;
width: 250px;
border-radius: 20px;
@media (max-width: 410){
    width: 100%;
}
`
const Next=styled.img`
height: 25px`
const Below=styled.div`
display: flex;
justify-content: space-between;
`
export {Card,CardImg,Next,Below}