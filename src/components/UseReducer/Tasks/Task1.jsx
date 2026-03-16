import React, { useReducer } from "react";

const Task1 = () => {
  let initial = 0;
  let reducer = (state, action) => {
    switch (action) {
      case "i":
        return state + 1;
        break;
      case "d":
        return state - 1;
        break;
      case "r":
        return initial;
        break;
      case "i+5":
        return state + 5;
        break;

      default:
        return state;
        break;
    }
  };

  let [state, dispatch] = useReducer(reducer, initial);

  return (
    <>
      <div>count: {state}</div>
      <button
        onClick={() => {
          dispatch("i");
        }}
      >
        inc
      </button>{" "}
      <br />
      <button
        onClick={() => {
          dispatch("d");
        }}
      >
        dec
      </button>{" "}
      <br />
      <button
        onClick={() => {
          dispatch("r");
        }}
      >
        res
      </button>{" "}
      <br />
      <button
        onClick={() => {
          dispatch("i+5");
        }}
      >
        inc+5
      </button>{" "}
      <br />
    </>
  );
};

export default Task1;
