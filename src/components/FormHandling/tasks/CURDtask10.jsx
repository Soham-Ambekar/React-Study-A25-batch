import React, { useState } from 'react'

const CURDtask10 = () => {
    let[bike,setBike]=useState( [
  {
    id: 1,
    brand: "Royal Enfield",
    model: "Classic 350",
    year: 2022
  },
  {
    id: 2,
    brand: "KTM",
    model: "Duke 200",
    year: 2021
  },
  {
    id: 3,
    brand: "Yamaha",
    model: "R15",
    year: 2023
  }
])

let[state,setState]=useState({id:Date.now(),brand:"",model:"",year:""})

let handleChange=(e)=>{ setState({...state,[e.target.name]:e.target.value}) }
let handleSubmit=(e)=>{ 
  e.preventDefault()
   setBike([...bike,state])
   setState({id:Date.now(),brand:"",model:"",year:""})
   
  }
let handleDelete=(id)=>{
  setBike(bike.filter(obj=>obj.id != id))
}
let handleUpdate=(obj)=>{
  setState({id:obj.id, brand:obj.brand,model:obj.model,year:obj.year})

  handleDelete(obj.id)
}

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name='brand' value={state.brand} />
        <input type="text" onChange={handleChange} name='model' value={state.model} />
        <input type="text" onChange={handleChange} name='year' value={state.year} />
<button>Add bike</button>
    </form>

    <div>{
        bike.map(obj=>(
            <div>
              <br />
                <p>{obj.brand}</p>
                <p>{obj.model}</p>
                <p>{obj.year}({obj.id})</p>

                <button onClick={()=>{handleUpdate(obj)}}>update</button>
                <button onClick={()=>{handleDelete(obj.id)}}>delete</button>
                

            </div>
        ))
        }</div>
    
    
    </>
  )
}

export default CURDtask10