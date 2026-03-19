import React from 'react'

const Display = ({list, handleUpdate, handleDelete}) => {
  return (
    <>
    {
        list.map(obj=>(
            <div key={obj.id}> <br />
                <p>{obj.quote}</p>
                <p>{obj.author}</p>
                <button onClick={()=>{handleDelete(obj.id)}}>Delete</button>
                <button onClick={()=>{handleUpdate(obj)}}>Update</button>
            </div>
        ))
    }
    
    </>
  )
}

export default Display