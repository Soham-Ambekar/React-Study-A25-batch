// 7️⃣ Simple Todo (Without useEffect)
// Add task
// Delete task
// Clear all
// Show total count of tasks

import React, { useState } from "react";

const Que4 = () => {
  let [data, setData] = useState([
    { task: "learn eng", priority: "high", id: "1" },
    { task: "learn react", priority: "high", id: "2" },
    { task: "learn js", priority: "high", id: "3" },
    { task: "learn science", priority: "med", id: "4" },
  ]);

  let [state, setState] = useState({ task: "", priority: "", id: Date.now() });

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, state]);
    setState({ task: "", priority: "", id: Date.now() });
  };

  let handleDel = (id) => {
    setData(data.filter((obj) => id != obj.id));
  };

  let handleUp =(obj)=>{
    setState(
        {task: obj.task, priority:obj.priority, id:obj.id}
    )
    handleDel(obj.id)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="task"
          value={state.task}
          type="text"
        />
        <input
          onChange={handleChange}
          name="priority"
          value={state.priority}
          type="text"
        />
        <button>Add</button>
      </form>

      {data.map((obj) => (
        <div key={obj.id}>
          <br />
          <p>{obj.task}</p>
          <p>
            {obj.priority}({obj.id})
          </p>
          <button
            onClick={() => {
              handleDel(obj.id);
            }}
          >
            delete
          </button>

          <button onClick={()=>{handleUp(obj)}}>Update</button>
        </div>
      ))}
    </>
  );
};

export default Que4;
