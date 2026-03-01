import React, { useState } from 'react'

const CURDtask4 = () => {

    let [task,setTask]=useState([
  { id: 1, task: "Learn React", priority: "High", completed: false },
  { id: 2, task: "Practice DSA", priority: "Medium", completed: true },
  { id: 3, task: "Build Project", priority: "High", completed: false },
  { id: 4, task: "Workout", priority: "Low", completed: true },

  { id: 5, task: "Revise JavaScript", priority: "High", completed: false },
  { id: 6, task: "Read Clean Code Book", priority: "Medium", completed: false },
  { id: 7, task: "Apply for Jobs", priority: "High", completed: false },
  { id: 8, task: "Update Resume", priority: "High", completed: true },
  { id: 9, task: "Prepare for Interview", priority: "High", completed: false },
  { id: 10, task: "Watch React Tutorial", priority: "Low", completed: true },

  { id: 11, task: "Practice Array Methods", priority: "Medium", completed: false },
  { id: 12, task: "Build Todo App", priority: "Medium", completed: true },
  { id: 13, task: "Learn Tailwind CSS", priority: "Low", completed: false },
  { id: 14, task: "Practice Mock Interview", priority: "High", completed: false },
  { id: 15, task: "Fix Bugs in Project", priority: "High", completed: true },

  { id: 16, task: "Read about useEffect", priority: "Medium", completed: false },
  { id: 17, task: "Create Portfolio Website", priority: "High", completed: false },
  { id: 18, task: "Practice CSS Flexbox", priority: "Low", completed: true },
  { id: 19, task: "Improve LinkedIn Profile", priority: "Medium", completed: false },
  { id: 20, task: "Solve LeetCode Problems", priority: "High", completed: false },

  { id: 21, task: "Study System Design Basics", priority: "Medium", completed: false },
  { id: 22, task: "Optimize React App", priority: "Medium", completed: true },
  { id: 23, task: "Learn Git Advanced Commands", priority: "Low", completed: false },
  { id: 24, task: "Refactor Old Code", priority: "High", completed: false },
  { id: 25, task: "Build CRUD App", priority: "High", completed: true },

  { id: 26, task: "Practice API Integration", priority: "Medium", completed: false },
  { id: 27, task: "Learn Redux Basics", priority: "Low", completed: false },
  { id: 28, task: "Deploy Project on Netlify", priority: "Medium", completed: true },
  { id: 29, task: "Understand Async Await", priority: "High", completed: false },
  { id: 30, task: "Practice Event Handling", priority: "Low", completed: true }
])

let[state,setState]= useState({
    id:Date.now(),task:"",priority:"",completed:""
})

let handleChange = (e)=>{
    setState({...state, [e.target.name]: e.target.value})
}

let handleSubmit=(e)=>{
    e.preventDefault();
    setTask([...task, state])
    setState({id:Date.now(),task:"",priority:"",completed:""})
}

let handleUpdate=(obj)=>{
    setState({id:obj.id,task:obj.task,priority:obj.priority,completed:obj.completed})
    handleDelete(obj.id)
}

let handleDelete=(id)=>{
    setTask( task.filter(obj=> obj.id != id) )
}



  return (
    <>
  {/* FORM */}
  <form
    onSubmit={handleSubmit}
    className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl mx-auto mt-6 space-y-4"
  >
    <h2 className="text-2xl font-bold text-center text-gray-700">
      Add New Task
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        name="task"
        value={state.task}
        onChange={handleChange}
        placeholder="Enter Task"
        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        name="priority"
        value={state.priority}
        onChange={handleChange}
        placeholder="Priority (High/Medium/Low)"
        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="text"
        name="completed"
        value={state.completed}
        onChange={handleChange}
        placeholder="Completed (true/false)"
        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
      Add Task
    </button>
  </form>

  {/* TASK LIST */}
  <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
    <div className="w-full max-w-2xl space-y-4">

      {task.map((obj) => (
        <div
          key={obj.id}
          className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center border hover:shadow-xl transition duration-300"
        >
          <div>
            <p className="text-lg font-semibold text-gray-800">
              {obj.task}
            </p>

            <p
              className={`text-sm font-medium ${
                obj.priority === "High"
                  ? "text-red-500"
                  : obj.priority === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              Priority: {obj.priority}
            </p>

            <p
              className={`text-sm ${
                obj.completed ? "text-green-600" : "text-gray-500"
              }`}
            >
              Status: {obj.completed ? "Completed ✅" : "Pending ❌"}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              onClick={() => handleUpdate(obj)}
              className="bg-yellow-400 text-white px-4 py-1 rounded-lg hover:bg-yellow-500 transition"
            >
              Update
            </button>

            <button
              onClick={() => handleDelete(obj.id)}
              className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</>
  )
}

export default CURDtask4