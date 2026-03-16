import { createContext, useState } from "react";
import Home from "./Home";
import Cart from "./Cart";


export let UserContext = createContext()

let UserProvider = ()=>{
    let  [ state, setState]= useState(false)

    let handleClick=()=>{
        setState(!state)
    }


    return(
        <UserContext.Provider value={{state,handleClick}}>
            <Home></Home>
            <Cart></Cart>
        </UserContext.Provider>
    )
}

export default UserProvider;