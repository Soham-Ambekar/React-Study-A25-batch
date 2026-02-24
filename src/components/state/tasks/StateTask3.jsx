import React, { Fragment } from 'react'

const StateTask3 = () => {
    let color = ["red","blue","yellow","orange"]

    let handleClick = (e)=>{
        let randomNum = Math.floor(Math.random()*4)
        e.target.style.background = color[randomNum]
    }


  return (
    <Fragment>
        <div style={{width: "300px" , height: "300px", border:"2px solid black"}} onClick={handleClick}></div>
    </Fragment>
  )
}

export default StateTask3
