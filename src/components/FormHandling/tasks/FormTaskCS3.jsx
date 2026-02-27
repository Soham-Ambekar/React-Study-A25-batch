// tasks 3: take 2 states, 1st as a object for username password and id, and 2nd as a list
// diaplay it on UI...
// input field should br empty on submission
// using single function for all the inputs..using dynamic key,

import React, { useState } from "react";

const FormTaskCS3 = () => {
  let [state, setState] = useState({
    username: "",
    password: "",
    id: Date.now(),
  });

  let [list, setList] = useState([]);

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!state.username.trim() || !state.password.trim()) return;

    setList([...list, state]);

    setState({
      username: "",
      password: "",
      id: Date.now(),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={state.username}
            name="username"
            onChange={handleChange}
            placeholder="Username..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            value={state.password}
            name="password"
            onChange={handleChange}
            placeholder="Password..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg
                       hover:bg-blue-600 active:scale-95 transition"
          >
            Login
          </button>
        </form>

        {/* Display List */}
        <div className="mt-6 space-y-3">
          {list.map((user) => (
            <div
              key={user.id}
              className="bg-gray-50 border border-gray-200 
                         p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-gray-700 font-semibold">
                Username: {user.username}
              </h3>
              <h3 className="text-gray-600">Password: {user.password}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormTaskCS3;
