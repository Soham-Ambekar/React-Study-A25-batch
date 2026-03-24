import React, { useReducer, useState } from "react";

// Initial state (empty list)
const initialState = [];

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {

    // ➕ Add Todo
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    // ❌ Delete Todo
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    // 🔁 Toggle Todo
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    // 🧹 Clear Completed Todos
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

const TodoReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Add Button */}
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: input });
          setInput("");
        }}
      >
        Add
      </button>

    
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>

            
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoReducer;