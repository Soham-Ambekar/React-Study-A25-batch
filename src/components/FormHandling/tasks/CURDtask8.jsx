import React, { useState } from 'react'

const CURDtask8 = () => {

    let [data,setData]=useState([
  {
    id: 1,
    name: "Soham Ambekar",
    role: "Frontend Developer",
    salary: 45000
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "QA Tester",
    salary: 38000
  },
  {
    id: 3,
    name: "Rahul Patil",
    role: "Backend Developer",
    salary: 52000
  },
  {
    id: 4,
    name: "Anjali Mehta",
    role: "UI/UX Designer",
    salary: 40000
  }
])

let[state,setState]=useState({id:Date.now(),name:"",role:"",salary:""})

let handleChange=(e)=>{
    setState({...state, [e.target.name]:e.target.value})
}

let handleSubmit=(e)=>{
    e.preventDefault();
    setData([...data,state])
    setState({id:Date.now(),name:"",role:"",salary:""})
}


let handleDelete=(id)=>{
    setData( data.filter(obj=> obj.id != id ))
}

let handleUpdate=(obj)=>{
    setState({id:obj.id,name:obj.name,role:obj.role,salary:obj.salary})
    handleDelete(obj.id)
}


  return (
   <>

   <form action="" onSubmit={handleSubmit}>
    <input type="text" name='name' value={state.name} onChange={handleChange}/>
    <input type="text" name='role' value={state.role} onChange={handleChange}/>
    <input type="text" name='salary' value={state.salary} onChange={handleChange}/>
<button>Add Employee</button>
   </form>

   <div>{
    data.map(obj=>(
        <div>
            <br />
            <p>{obj.name}</p>
            <p>{obj.role}</p>
            <p>{obj.salary}({obj.id})</p>
            <button onClick={()=>{handleDelete(obj.id)}}>Delete</button>
            <button onClick={()=>{handleUpdate(obj)}}>update</button>
        </div>
    ))
    
    }</div>
   
   
   </>
  )
}

export default CURDtask8