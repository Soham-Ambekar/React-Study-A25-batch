import React, { useState } from 'react'

const CURDtask7 = () => {
 let[data,setData]=useState([
  {
    id: 1,
    name: "Amit Joshi",
    course: "BCA",
    marks: 78
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    course: "BBA",
    marks: 45
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    course: "MCA",
    marks: 88
  },
  {
    id: 4,
    name: "Kavya Nair",
    course: "MBA",
    marks: 67
  }
])

let [ state,setState]=useState({ 
    id: Date.now(),
    name: "",
    course: "",
    marks: ""
})

let handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
}

let handleSubmit=(e)=>{
    e.preventDefault();
    setData([...data,state])
    setState({id:Date.now(),name:"",course:"",marks:""})
}

let handleDelete=(id)=>{
    setData( data.filter(obj=> obj.id != id) )
}

let handleUpdate=(obj)=>{
    setState({id:obj.id,name:obj.name,course:obj.course,marks:obj.marks})
    handleDelete(obj.id)
}

  return (
    <>

    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name='name' value={state.name}  />
        <input type="text" onChange={handleChange} name='course' value={state.course}  />
        <input type="text" onChange={handleChange} name='marks' value={state.marks}  />
        <button>Add Data</button>
    </form>

    <div>
        {
            data.map(obj=>(
                <div key={obj.id}>
                    <br /> <hr />
                    <p>{obj.name}</p>
                    <p>{obj.course}</p>
                    <p>{obj.marks}({obj.id})</p>
                    <button onClick={()=>{handleUpdate(obj)}}>Update</button>
                    <button onClick={()=>{handleDelete(obj.id)}}>Delete</button>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default CURDtask7