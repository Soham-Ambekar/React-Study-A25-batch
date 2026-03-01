import React, { useState } from 'react'

const CURDtask6 = () => {
    let [pro , setPro]= useState([
  {
    id: 101,
    title: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    stock: 25
  },
  {
    id: 102,
    title: "Running Shoes",
    price: 2499,
    category: "Fashion",
    stock: 10
  },
  {
    id: 103,
    title: "Bluetooth Speaker",
    price: 1599,
    category: "Electronics",
    stock: 0
  },
  {
    id: 104,
    title: "Backpack",
    price: 999,
    category: "Accessories",
    stock: 18
  }
])
let [state,setState]= useState({
    id:Date.now(),
    title:"",
    price:"",
    category:"",
    stock:""
})

let handleChange = (e)=>{
    setState({...state,[e.target.name]:e.target.value})
}

let handleSubmit = (e)=>{
    e.preventDefault();
    setPro([...pro,state])
}

let handleDelete=(id)=>{
    setPro( pro.filter(obj=> obj.id != id ))
}

let handleUpdate=(obj)=>{
  setState({id:Date.now(), title:obj.title, price:obj.price, category:obj.category, stock:obj.stock})
  handleDelete(obj.id)
}


  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name='title' value={state.title} onChange={handleChange} />
        <input type="text" name='price' value={state.price} onChange={handleChange} />
        <input type="text" name='category' value={state.category} onChange={handleChange} />
        <input type="text" name='stock' value={state.stock} onChange={handleChange} />

        <button>Add Product</button>
    </form>

    <div>
        {
            pro.map(obj=>(
                <div key={obj.id}>
                    <br /><br />
                    <p>{obj.title}</p>
                    <p>{obj.price}</p>
                    <p>{obj.category}</p>
                    <p>{obj.stock}({obj.id})</p>

                    <button onClick={()=>{handleUpdate(obj)}}>Update</button>
                    <button onClick={()=>{handleDelete(obj.id)}}>Delete</button>

                </div>
            ))
        }
    </div>
    


    </>
  )
}

export default CURDtask6