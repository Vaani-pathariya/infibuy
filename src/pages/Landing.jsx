import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import banner1 from "../assets/images/Banner.png"
import banner2 from "../assets/images/b2.png"
import roll1 from "../assets/images/roll1.png"
import roll2 from "../assets/images/roll2.png"
import roll3 from "../assets/images/roll3.png"
import roll4 from "../assets/images/roll4.png"
import roll5 from "../assets/images/roll5.png"
import roll6 from "../assets/images/roll6.png"
import { Banner,LowerBanner,Flex,Design,FlexSpace} from "../styles/landing";
import NewCard from "../components/NewCard";
const images = [banner1,banner2]; 
const Landing=()=>{
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
        
        setCount(count => count + 1);
        }, 3000);

        return () => clearInterval(timerId);
    }, []);

  const image = images[count % images.length];
    return (
        <div>
            <Navbar/>
            <Banner src={image}></Banner>
            <LowerBanner>
                <Flex>
                    <Design></Design>
                    NEW ARRIVALS
                </Flex>
                <FlexSpace>
                    <NewCard img={roll1}/>
                    <NewCard img={roll2}/>
                    <NewCard img={roll3}/>
                    
                </FlexSpace>
                <FlexSpace>
                    <NewCard img={roll4}/>
                    <NewCard img={roll5}/>
                    <NewCard img={roll6}/>
                </FlexSpace>
            </LowerBanner>

        </div>
    )
}
export default Landing;