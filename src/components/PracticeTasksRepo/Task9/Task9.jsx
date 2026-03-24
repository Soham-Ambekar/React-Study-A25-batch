// Task 9 – Shopping Cart Reducer
// Reducer should support:
// ADD_PRODUCT
// REMOVE_PRODUCT
// INCREASE_QUANTITY
// DECREASE_QUANTITY
// CLEAR_CART
// Example Product
// {
//  id: 1,
//  name: "Keyboard",
//  price: 1200
// }

import React, { useReducer } from 'react'

const Task9 = () => {
let initialProduct={ name:"", price:"", id:Date.now()}
let productReducer = (state,action)=>{
    switch (action.type) {
        case "Add":
            return {...state, [action.payload.name]: action.payload.value}
            break;
        case "empty":
        return action.payload
    
        default:
            break;
    }
}
    let [product,dispatchProduct] = useReducer(productReducer, initialProduct)


let listReducer = (state,action)=>{
    switch (action.type) {
        case "new":
            return [...state, action.payload]
            break;
    
        default:
            break;
    }
}

    let [list,dispatchList]= useReducer(listReducer, [])

    let handleSubmit=(e)=>{
        e.preventDefault();
        dispatchList({type:"new", payload: product})
        dispatchProduct({type:"empty", payload: {id: Date.now(), name:"", price:""} })
    }


    let handleChange = (e)=>{
        dispatchProduct({type:"Add", payload:e.target})
    }

  return (
    <>

    <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={product.name} onChange={handleChange} placeholder='product' /> <br /><br />
        <input type="text" name='price' value={product.price} onChange={handleChange} placeholder='price' /> <br /><br />
        <button>Submit</button> <br /><br />
    </form>

    <div>
        {
            list.map(obj=>(
                <div key={obj.id}>
                    <br />
                    <p>{obj.name}</p>
                    <p>{obj.price}({obj.id})</p>
                  
                </div>
            ))


        }
    </div>
    
    
    </>
  )
}

export default Task9