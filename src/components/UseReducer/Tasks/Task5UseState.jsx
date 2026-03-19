import React, { useState } from 'react'

const Task5UseState = () => {

    let[bg,setBg] = useState({})
    let[color,setColor]=useState({})
    let[size,setSize] =useState({})



  return (
    <>

    <div className='flex flex-col justify-center items-center h-screen'>
        
            <div style={{background:bg.bg, color:color.color, fontSize:size.size }} className='flex justify-center items-center h-[40vh] w-[40vw] border' >
                Lorem ipsum dolor sit amet.
            </div>

            <div className='flex flex-col justify-center items-center gap-2'>
                
                <div className='flex gap-10'>
                  <button onClick={()=>{setBg({bg:"red"})}}  >Bg.Red</button>
                <button onClick={()=>{setBg({bg:"blue"})}}  >Bg.Blue</button>
                <button onClick={()=>{setBg({bg:"green"})}}  >Bg.Green</button>

                </div>
               <div  className='flex gap-10'>
                 <button onClick={()=>{setColor({color:"gray"})}} >Txt-Gray</button>
                <button onClick={()=>{setColor({color:"yellow"})}} >Txt-Yellow</button>
                <button onClick={()=>{setColor({color:"red"})}} >Txt-Red</button>
               </div>
<div  className='flex gap-10'>
  
                <button onClick={()=>{setSize({size:"12px"})}} >12px</button>
                <button onClick={()=>{setSize({size:"18px"})}} >18px</button>
                <button onClick={()=>{setSize({size:"22px"})}} >22px</button>

</div>


                <button></button>

            </div>
        
    </div>
    
    
    </>
  )
}

export default Task5UseState