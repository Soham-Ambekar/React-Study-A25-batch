import React, { useState } from 'react'

const FormTask3 = () => {
    let [username,setUsername] =useState("")
    let [password,setPassword] =useState("")
    let[list,setList]= useState([])

    let handleUsername = (e)=>{
        setUsername(e.target.value)
    }
    let handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        setList([...list, {username,password}])
        setUsername("")
        setPassword("")
    }


  return (
    <div>
        <form action="">
            <input type="text"  name='username'  value={username} onChange={handleUsername} />
            <input type="password" name='password' value={password} onChange={handlePassword} />
            <button onSubmit={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default FormTask3