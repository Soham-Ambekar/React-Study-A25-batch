// 11️⃣ To-Do List (Very Important)
// Add task
// Delete task
// Mark as completed
// Show total count
// This is a VERY important beginner interview task.



import React, { useState } from "react";


function StateTask14() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  function handleAdd() {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  // Delete Task
  function handleDelete(id) {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  }

  // Toggle Complete
  function handleToggle(id) {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );

    setTasks(updatedTasks);
  }

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>To-Do List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        style={{ padding: "5px", width: "70%" }}
      />

      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <li key={t.id} style={{ marginTop: "10px" }}>
            
            <span
              onClick={() => handleToggle(t.id)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.text}
            </span>

            <button
              onClick={() => handleDelete(t.id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>

          </li>
        ))}
      </ul>

      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default StateTask14;