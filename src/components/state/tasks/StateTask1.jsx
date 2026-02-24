// task 1 and 2: create a counter which will increment the value by 1 and display it on ui


import React, { Fragment } from 'react'

const Task1 = () => {

    let count = 0;
    let handleClick = ()=>{
        count +=1;
        console.log(count);
        return ()=>{
            console.log("hello");   
        }
    }

  return (
    <Fragment>

        <div>Task1</div>
        <p>Count : {count} </p>
        {/* <button onClick={handler()}>click</button>   this is the wrong practice, becoz it implicitly calling...*/}
        <button onClick={handleClick}>click</button>


    </Fragment>   
    
  )
}

export default Task1