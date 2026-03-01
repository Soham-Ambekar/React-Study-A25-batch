import React, { useState } from 'react'

const CURDtask5 = () => {

    let [task,setTask]=useState([
  {
    id: 1,
    title: "Learn React Hooks",
    description: "Focus on useState and useEffect",
    priority: "High"
  },
  {
    id: 2,
    title: "Build CRUD App",
    description: "Add, Delete, Update functionality",
    priority: "Medium"
  },
  {
    id: 3,
    title: "Prepare for Testing Interview",
    description: "Revise manual testing concepts",
    priority: "High"
  },
  {
    id: 4,
    title: "Workout",
    description: "Evening cycling session 🚴",
    priority: "Low"
  }

])

let [state,setState] = useState({id:Date.now(), title:"",description:"", priority:"", completed:""})


let handleChange=(e)=>{
    setState({...state, [e.target.name]: e.target.value})
}

let handleSubmit=(e)=>{
    e.preventDefault();
    setTask([...task,state]);

    setState({id:Date.now(), title:"",description:"", priority:"", completed:""})
}

let handleDelete=(id)=>{
    setTask( task.filter(obj=> obj.id != id) )
}


let handleUpdate=(obj)=>{
    setState({id:Date.now(), title:obj.title,  description:obj.description, priority:obj.priority})

    handleDelete(obj.id)
}


  return (
    <>

    <form  onSubmit={handleSubmit}>
        <input type="text" name='title' value={state.title} onChange={handleChange}/> <br /><br />
        <input type="text" name='description' value={state.description} onChange={handleChange}/> <br /> <br />
        <input type="text" name='priority' value={state.priority} onChange={handleChange}/> <br /><br />

      <button>Add Task</button>
    </form>


    <div>
        {
            task.map((obj)=>(
                <div key={obj.id}>
                    <br /> 
                    <p>{obj.title}</p>
                    <p>{obj.description}</p>
                    <p>{obj.priority}({obj.id})</p>

                    <button onClick={()=>{handleUpdate(obj)}} >Update</button>
                    <button onClick={()=>{handleDelete(obj.id)}}>Delete</button>
                </div>
            ))
        }
    </div>
    
    
    
    
    </>
  )
}

export default CURDtask5