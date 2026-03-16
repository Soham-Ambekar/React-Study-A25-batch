import { createContext, useState } from "react";
import Counter from "./Counter";
import Dec from "./Dec";
import Inc from "./Inc";


export let UserContext = createContext()

let UserProvide=()=>{
    let [count,setCount] = useState("0");

    let handeIncrement = ()=>{
        setCount(count+1)
    }

    let handleDecrement = ()=>{
        setCount(count-1)
    }


    return(
        <UserContext.Provider value={{count,handeIncrement,handleDecrement}}>
        <Counter></Counter>
        <Dec></Dec>
        <Inc></Inc>
        </UserContext.Provider>
    )
}

export default UserProvide;