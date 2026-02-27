// task 1 : simple todo list with two states one for what user typed in input field and another for storing todo into list?
// Display todo on UI...
// input field should br empty on submission


import React, { useState } from 'react'

const FormTaskCS1 = () => {
    let [list,setList] = useState([]);
    let[task,setTask] = useState("")

    let handleChange= (e)=>{
        setTask(e.target.value)
    }

    let handleSubmit = (e)=>{
        e.preventDefault()
        setList([...list, task])
        setTask("")
    }
    
  return (
    <>
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
      
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
        Todo App
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 
                     transition"
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg 
                     hover:bg-blue-600 active:scale-95 
                     transition duration-200 shadow"
        >
          Add
        </button>
      </form>

      <div className="space-y-3">
        {list.map((val, ind) => (
          <div
            key={ind}
            className="bg-gray-50 border border-gray-200 
                       p-3 rounded-lg shadow-sm 
                       hover:shadow-md transition"
          >
            <h2 className="text-gray-700">{val}</h2>
          </div>
        ))}
      </div>

    </div>
  </div>
</>

   
  )
}

export default FormTaskCS1