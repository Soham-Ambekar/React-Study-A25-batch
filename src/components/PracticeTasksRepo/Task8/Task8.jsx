// Task 8 – Form State Management
// Manage a registration form using useReducer.
// Fields:
// name
// email
// password
// confirmPassword
// Example Input
// name: "Prasad"
// email: "mailto:prasad@gmail.com"
// password: "123456"
// confirmPassword: "123456"

import React, { useReducer, useState } from 'react'

const Task8 = () => {
    let inital = {name:"",email:"",password:"",confirm_password:""}

    let reducer = (state,action)=>{
        switch (action.type) {
            case "newReg":
                state = {...state, [action.payload.name]: action.payload.value}
                return state;
            case "empty":
                return action.payload
                
                break;
        
            default:
                break;
        }
    }

    let [state,dispatch] = useReducer(reducer, inital)


    let listReducer = (state,action)=>{
        switch (action.key) {
            case "Add":
                return [...list,action.payload]
                break;
        
            default:
                break;
        }
    }
    let [list,dispatchList] = useReducer(listReducer, [])


console.log(state);

let handleChange=(e)=>{
    dispatch({type:"newReg", payload: e.target})
}

let handleSubmit=(e)=>{
    e.preventDefault();
    dispatchList({type:"Add", payload: state})
    dispatch({type: "empty", payload: inital})

}



  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={state.name} placeholder='name' onChange={handleChange} /> <br /> <br />
        <input type="email" name='email' value={state.email} placeholder='email' onChange={handleChange} /> <br /> <br />
        <input type="password" name='password' value={state.password} placeholder='password' onChange={handleChange} /> <br /> <br />
        <input type="password" name='confirm_password' value={state.confirm_password} placeholder='confirm password' onChange={handleChange} /> <br /> <br />

        <button>Submit</button>

       
        

    </form>
    
    </>
  )
}

export default Task8