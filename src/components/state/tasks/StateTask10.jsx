// 6️⃣ Simple Login Form
// Email
// Password
// Show values below form
// Show error if empty on submit


import React, { Fragment, useState } from 'react'

const StateTask10 = () => {
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let[submitted,setSubmitted] = useState(false)
    let [error,setError] = useState("")

    let handleSubmit = (e)=>{
        e.preventDefault();

        if(email == "" || password ==""){
            setError("Please fill all the fields")
            setSubmitted(false)
        }
        else{
            setError("")
            setSubmitted(true)
        }
    }



  return (
    <Fragment>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}}/> <br /> <br />
            <input type="text" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}} /> <br /> <br />
            <button>Submit</button>

        </form>

        {error && <p style={{color:"red"}}>{error}</p> }

        {submitted && <div> <p>Email: {email}</p>  <p>Password: {password}</p>   </div>  }
        

    </Fragment>

  )
}

export default StateTask10