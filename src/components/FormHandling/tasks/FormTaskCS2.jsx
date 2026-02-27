// task 2: take 3 states, 1st for username , 2nd for password and 3rd for list
// diaplay it on UI...
// input field should br empty on submission
// use 2 different function

import React, { useState } from "react";

const FormTaskCS2 = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [list, setList] = useState([]);

  let handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) return;

    setList([
      ...list,
      { username: username, password: password, id: Date.now() },
    ]);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          User Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg 
                       hover:bg-blue-600 active:scale-95 transition"
          >
            Add User
          </button>
        </form>

        {/* Display List */}
        <div className="mt-6 space-y-3">
          {list.map((obj) => (
            <div
              key={obj.id}
              className="bg-gray-50 border border-gray-200 
                         p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-gray-700 font-semibold">
                Username: {obj.username}
              </h3>
              <h3 className="text-gray-600">
                Password: {obj.password}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FormTaskCS2;