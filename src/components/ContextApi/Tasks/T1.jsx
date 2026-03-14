import React, { useState } from 'react'

const T1 = () => {

    let[data,setData] = useState([{
    id: 1,
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 2499,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 3499,
    category: "Footwear"
  },
  {
    id: 4,
    name: "Coffee Mug",
    price: 299,
    category: "Home & Kitchen"
  },
  {
    id: 5,
    name: "Backpack",
    price: 1499,
    category: "Accessories"
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 5999,
    category: "Electronics"
  },
  {
    id: 7,
    name: "Notebook",
    price: 99,
    category: "Stationery"
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 499,
    category: "Home & Kitchen"
  },
  {
    id: 9,
    name: "Gaming Keyboard",
    price: 2999,
    category: "Electronics"
  },
  {
    id: 10,
    name: "Sunglasses",
    price: 899,
    category: "Accessories"
  }])

  let[cart,setCart] = useState([])

  let[state,setState] = useState(false)

  let handleClick= ()=>{
    setState(!state)
  }

  let handleCart=(pro)=>{
    setCart([...cart, pro])
  }


  return (
    <>

    <button onClick={handleClick} >{state ? "Cart" : "Home"}</button>


    {

        
  state
    ? cart.map((pro) => (
        <div key={pro.id}>
          <br />
          <p>{pro.name}</p>
          <p>{pro.price}</p>
          <p>{pro.category}({pro.id})</p>
        
        </div>
      ))
    : data.map((pro) => (
        <div key={pro.id}>
          <br />
          <p>{pro.name}</p>
          <p>{pro.price}</p>
          <p>{pro.category}({pro.id})</p>
          <button onClick={()=>{handleCart(pro)}}>Add to Cart</button>
        </div>
      ))
}


    
    
    </>
  )
}

export default T1