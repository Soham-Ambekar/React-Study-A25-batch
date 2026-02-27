import React, { Fragment, useState } from "react";

const FormTask1 = () => {
  let [stateArr, setStateArr] = useState([]);
  let [todo, setTodo] = useState("");

  let handleChange = (e) => {
    setTodo(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    
    setStateArr([...stateArr, { text: todo, completed: false }]);

    setTodo("");
  };

  const handleDelete = (indexToDelete) => {
    let newArr = [...stateArr];
    newArr.splice(indexToDelete, 1);
    setStateArr(newArr);
  };

  const handleToggle = (indexToToggle) => {
    const newArr = [...stateArr];
    newArr[indexToToggle].completed = !newArr[indexToToggle].completed;

    setStateArr(newArr);
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
            Todo App
          </h1>

          <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Enter your task..."
              className="flex-1 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />

            <button className="text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-lg px-4">
              Add
            </button>
          </form>

          <div className="space-y-2">
            {stateArr.length === 0 ? (
              <p className="text-gray-400 text-center">No tasks yet 😴</p>
            ) : (
              stateArr.map((task, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
                >
                 
                  <p
                    className={
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }
                  >
                    {task.text}
                  </p>

                  <div className="flex gap-2">
                   
                    <button
                      onClick={() => handleToggle(index)}
                      className="text-green-500 hover:text-white
             p-2 rounded-lg transition duration-200 
             hover:scale-110 active:scale-90 
             cursor-pointer"
                    >
                      ✔️
                    </button>

                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-white
             p-2 rounded-lg transition duration-200 
             hover:scale-110 active:scale-90 
             cursor-pointer"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FormTask1;
