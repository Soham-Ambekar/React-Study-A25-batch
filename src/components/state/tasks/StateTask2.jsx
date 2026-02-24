//  this is the proper solution for the task 1

import React, { Fragment, useState } from "react";

const StateTask2 = () => {
  let [state, setState] = useState(0)

  let handleClick = () =>{
      setState(state+1)
  }

  return (
    <Fragment>
      <button onClick={handleClick}>click :: {state}</button>
    </Fragment>
  );
};

export default StateTask2;
