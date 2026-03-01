import React, { useState } from 'react'

const CURDtask9 = () => {
    let[data,setData]=useState([
  {
    id: 1,
    accountHolder: "Soham Ambekar",
    bankName: "SBI",
    balance: 25000
  },
  {
    id: 2,
    accountHolder: "Priya Sharma",
    bankName: "HDFC",
    balance: 78000
  },
  {
    id: 3,
    accountHolder: "Rahul Patil",
    bankName: "ICICI",
    balance: 500
  }
])
let [state,setState]=useState({id:Date.now(),accountHolder:"",bankName:"",balance:""})

let handleChange =(e)=>{
    setState({...setState,[e.target.name]:e.target.value})
}

let handleSubmit=(e)=>{
    e.preventDefault();
    setData([...data,state])
    setState({id:Date.now(),accountHolder:"",bankName:"",balance:""})
}


let handleDelete=(id)=>{
    setData( data.filter(obj=> obj.id != id) )
}
let handleUpdate=(obj)=>{
    setState({id:obj.id,accountHolder:obj.accountHolder,bankName:obj.bankName,balance:obj.balance})
    handleDelete(obj.id)
}


  return (
   <>
   <form onSubmit={handleSubmit}>
    <input type="text" name='accountHolder' value={state.accountHolder} onChange={handleChange} />
    <input type="text" name='bankName' value={state.bankName} onChange={handleChange} />
    <input type="text" name='balance' value={state.balance} onChange={handleChange} />
<button>Add Coustmer</button>

   </form>

   <div>
    {
        data.map(obj=>(
            <div key={obj.id}>
                <br />
                <p>{obj.accountHolder}</p>
                <p>{obj.bankName}</p>
                <p>{obj.balance}({obj.id})</p>

                <button onClick={()=>{handleUpdate(obj)}} >Update</button>
                <button onClick={()=>{handleDelete(obj.id)}} >Delete</button>

            </div>
        ))
    }
   </div>
   </>
  )
}

export default CURDtask9