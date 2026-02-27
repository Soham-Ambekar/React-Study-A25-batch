import React, { useState } from 'react'

const FormTask2 = () => {

    let [state,setState] = useState("");
    let [tasks,settTasks] = useState([]);

    let handleChange = (e)=>{
        setState(e.target.value)
    }
    

    let handleSubmit = (e)=>{
        e.preventDefault();
        settTasks([...tasks, state])
        setState("")
    }
    console.log(tasks);
    



  return (
    <>
    <form 
  onSubmit={handleSubmit}
  className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl space-y-4"
>
  <h2 className="text-xl font-semibold text-gray-700 text-center">
    Add Todo
  </h2>

  <input
    type="text" value={state}
    placeholder="Type here..."
    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-blue-400 
               focus:border-blue-400 transition duration-200"
    onChange={handleChange}
  />

  <button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 rounded-lg 
               hover:bg-blue-600 active:scale-95 
               transition duration-200 shadow-md"
  >
    Add Todo
  </button>
</form> 
        
        </>
  )
}

export default FormTask2