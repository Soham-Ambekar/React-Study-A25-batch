import React from 'react'

const Display = ({list, handleDelete, handleUpdate}) => {
  return (
    <>
    {
        list.map(user=>(
            <div key={user.id}> 
                <br />
                <p>{user.username}</p>
                <p>{user.password}</p>
                <button onClick={()=>{handleUpdate(user)}} >Update</button>
                <button onClick={()=>{handleDelete(user.id)}} >Delete</button>
            </div>
        ))



    }
    
    
    
    </>
  )
}

export default Display