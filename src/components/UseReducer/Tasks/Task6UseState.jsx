import React, { useState } from 'react'

const Task6UseState = () => {

    let[prop,setProp] = useState({
        background:"",
        color:"",
        fontSize:""
    })

  return (

    <div className='flex flex-col justify-center items-center h-screen' >
        <div className='flex flex-col justify-center items-center gap-5 ' >
            <div style={{background:prop.background, color:prop.color, fontSize:prop.fontSize}}    className='flex items-center justify-center  border h-[40vh]' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Cupiditate, voluptatum!
            </div>

            <div className='flex flex-col justify-center items-center gap-1' >
                <div className='flex justify-center items-center gap-10'>
                <button onClick={()=>{setProp({...prop,background:"Red"})}} >Bg.Red</button>
                <button onClick={()=>{setProp({...prop,background:"green"})}} >Bg.Green</button>
                <button onClick={()=>{setProp({...prop,background:"blue"})}} >Bg.Blue</button>
                <button onClick={()=>{setProp({...prop,background:"yellow"})}} >Bg.Yellow</button>
                </div>

                <div className='flex justify-center items-center gap-12'>
                    <button onClick={()=>{setProp({...prop,color:"Red"})}}>txt-red</button>
                    <button onClick={()=>{setProp({...prop,color:"gray"})}} >txt-gray</button>
                    <button onClick={()=>{setProp({...prop,color:"yellow"})}} >txt-yellow</button>
                    <button onClick={()=>{setProp({...prop,color:"blue"})}} >txt-blue</button>
                </div>

                <div className='flex justify-center items-center gap-18'>
                    <button onClick={()=>{setProp({...prop,fontSize:"12px"})}} >12px</button>
                    <button onClick={()=>{setProp({...prop,fontSize:"16px"})}} >16px</button>
                    <button onClick={()=>{setProp({...prop,fontSize:"20px"})}} >20px</button>
                    <button onClick={()=>{setProp({...prop,fontSize:"24px"})}} >24px</button>
                </div>
            </div>


        </div>
    </div>
    
    
  )
}

export default Task6UseState