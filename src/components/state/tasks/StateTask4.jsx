// 1️⃣ Counter with Features

// Increment
// Decrement
// Reset
// Increment by 5
// 👉 Bonus: Add step input (user decides +2, +5, etc.)

import React, { Fragment, useState } from "react";

const StateTask4 = () => {
  let [state, setState] = useState(0);

  let handleClickBelowZero = () => {
    if (state <= 0) {
      setState("the count wont be negative");
    } else {
      setState(state - 1);
    }
  };

  return (
    <Fragment>
      <h1 style={{ color: "red" }}>Counter : Task 1</h1>
      <h2>{state}</h2>
      <div>
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            setState(state + 1);
          }}
        >
          ⬆️
        </button>
        <button style={{ margin: "10px" }} onClick={handleClickBelowZero}>
          ⬇️
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            setState(0);
          }}
        >
          🔁
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            setState(state + 5);
          }}
        >
          ⬆️+5
        </button>
      </div>
    </Fragment>
  );
};

export default StateTask4;
