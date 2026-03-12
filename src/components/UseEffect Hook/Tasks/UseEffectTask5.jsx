// 6️⃣ Fetch API Data
// Fetch data from API.
// Use:
// https://jsonplaceholder.typicode.com/users
// Task:
// Fetch users
// Display user names in list

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseEffectTask5 = () => {

    let [state, setstate] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setstate(res.data)
            setfilteres(res.data)
        })
    },[])

  return (

    <>

  {
    filtered.map(user => (
      <div key={user.id}>
        <br />
        <p>Username: {user.username}</p>
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>
        <div>Address: <p> street: {user.address.street} </p>
                    <p> city: {user.address.city} </p>
                    <p> code:{user.address.zipcode} </p>
             
        </div>
        <p>Phone: {user.phone}</p>
      </div>
    ))
  }
  </>
)
}

export default UseEffectTask5