// Form Submit (Prevent Reload)
// Form with:
// Name
// Email
// On submit:
// Prevent page reload
// Show entered data below


import React, { Fragment, useState } from 'react'

const EventTask5 = () => {
    let [name,setName] = useState("")
    let [mail, setMail] = useState("")


    let handleSubmit = (e)=>{
        e.preventDefault();
        setName("")
        setMail("")
        

    }

  return (
    <Fragment>

        <form onSubmit={handleSubmit}>
            <input value={name} type="text" placeholder='Enter name..' onChange={(e)=>{setName(e.target.value)}} />  <br /> <br />
            <input value={mail} type="text" placeholder='Enter Email..' onChange={(e)=>{setMail(e.target.value)}} />    <br /> <br />
            <button>Submit</button>
        </form>
        <br /><br />

        <p>Name: {name}</p>
        <br />
        <p>Email: {mail}</p>




    </Fragment>
  )
}

export default EventTask5