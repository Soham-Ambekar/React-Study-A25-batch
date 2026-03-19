import React from 'react'

const Display = ({list, handleUpdate, handleDelete}) => {
  return (
    <>
    {
      list.map(obj=>(
        <div key={obj.id}>
          <br />
          <p>{obj.username}</p>
          <p>{obj.password}</p>
          <button onClick={()=>{handleUpdate(obj)}} >Update</button>
          <button onClick={()=>{handleDelete(obj.id)}} >Delete</button>

        </div>
      ))


    }
    
    
    
    </>
  )
}

export default Display