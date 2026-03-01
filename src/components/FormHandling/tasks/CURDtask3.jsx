import React, { useState } from 'react'

const CURDtask3 = () => {
    let [data, setData]= useState([
  { id: 1, name: "iPhone 15", price: 79999, category: "Mobile", stock: 10 },
  { id: 2, name: "Samsung S24", price: 74999, category: "Mobile", stock: 15 },
  { id: 3, name: "HP Pavilion", price: 65000, category: "Laptop", stock: 5 },
  { id: 4, name: "Boat Headphones", price: 1999, category: "Accessories", stock: 50 },
  { id: 5, name: "Dell Inspiron", price: 72000, category: "Laptop", stock: 7 },

  { id: 6, name: "Realme Narzo 60", price: 14999, category: "Mobile", stock: 25 },
  { id: 7, name: "OnePlus 12", price: 64999, category: "Mobile", stock: 8 },
  { id: 8, name: "MacBook Air M2", price: 114999, category: "Laptop", stock: 4 },
  { id: 9, name: "Lenovo ThinkPad", price: 82000, category: "Laptop", stock: 6 },
  { id: 10, name: "Asus ROG Strix", price: 125000, category: "Laptop", stock: 3 },

  { id: 11, name: "Sony WH-1000XM5", price: 29999, category: "Accessories", stock: 12 },
  { id: 12, name: "JBL Flip 6", price: 9999, category: "Accessories", stock: 20 },
  { id: 13, name: "Apple Watch Series 9", price: 41999, category: "Wearable", stock: 9 },
  { id: 14, name: "Samsung Galaxy Watch 6", price: 28999, category: "Wearable", stock: 14 },
  { id: 15, name: "Noise Smartwatch", price: 3999, category: "Wearable", stock: 40 },

  { id: 16, name: "iPad Air", price: 59999, category: "Tablet", stock: 11 },
  { id: 17, name: "Samsung Galaxy Tab S9", price: 69999, category: "Tablet", stock: 7 },
  { id: 18, name: "Redmi Pad", price: 18999, category: "Tablet", stock: 18 },
  { id: 19, name: "Canon EOS 1500D", price: 45999, category: "Camera", stock: 5 },
  { id: 20, name: "Sony Alpha A7", price: 145000, category: "Camera", stock: 2 },

  { id: 21, name: "Logitech MX Master 3", price: 7999, category: "Accessories", stock: 30 },
  { id: 22, name: "HP Wireless Keyboard", price: 2499, category: "Accessories", stock: 35 },
  { id: 23, name: "Mi Power Bank 20000mAh", price: 1999, category: "Accessories", stock: 60 },
  { id: 24, name: "Amazon Echo Dot", price: 4499, category: "Smart Device", stock: 22 },
  { id: 25, name: "Google Nest Hub", price: 8999, category: "Smart Device", stock: 13 },

  { id: 26, name: "Acer Predator Helios", price: 135000, category: "Laptop", stock: 4 },
  { id: 27, name: "MSI Gaming Laptop", price: 99000, category: "Laptop", stock: 6 },
  { id: 28, name: "Vivo V29", price: 32999, category: "Mobile", stock: 16 },
  { id: 29, name: "Oppo Reno 11", price: 27999, category: "Mobile", stock: 19 },
  { id: 30, name: "Nothing Phone 2", price: 44999, category: "Mobile", stock: 10 },

  { id: 31, name: "Zebronics Bluetooth Speaker", price: 2999, category: "Accessories", stock: 45 },
  { id: 32, name: "Portronics Laptop Stand", price: 1499, category: "Accessories", stock: 55 },
  { id: 33, name: "Apple AirPods Pro", price: 24999, category: "Accessories", stock: 17 },
  { id: 34, name: "Samsung Buds 2 Pro", price: 17999, category: "Accessories", stock: 21 },
  { id: 35, name: "Fitbit Charge 5", price: 14999, category: "Wearable", stock: 12 },

  { id: 36, name: "GoPro Hero 12", price: 38999, category: "Camera", stock: 8 },
  { id: 37, name: "DJI Mini 3 Drone", price: 75999, category: "Drone", stock: 3 },
  { id: 38, name: "PlayStation 5", price: 54999, category: "Gaming", stock: 6 },
  { id: 39, name: "Xbox Series X", price: 52999, category: "Gaming", stock: 7 },
  { id: 40, name: "Nintendo Switch", price: 29999, category: "Gaming", stock: 9 },

  { id: 41, name: "LG 55-inch OLED TV", price: 125999, category: "TV", stock: 4 },
  { id: 42, name: "Samsung 50-inch LED TV", price: 59999, category: "TV", stock: 8 },
  { id: 43, name: "Mi Smart TV 43", price: 24999, category: "TV", stock: 15 },
  { id: 44, name: "Blue Star AC 1.5 Ton", price: 38999, category: "Appliance", stock: 6 },
  { id: 45, name: "LG Double Door Fridge", price: 45999, category: "Appliance", stock: 5 },

  { id: 46, name: "Whirlpool Washing Machine", price: 32999, category: "Appliance", stock: 7 },
  { id: 47, name: "Philips Air Fryer", price: 11999, category: "Appliance", stock: 14 },
  { id: 48, name: "Havells Induction Cooktop", price: 3499, category: "Appliance", stock: 25 },
  { id: 49, name: "Mi Router 4A", price: 1299, category: "Networking", stock: 40 },
  { id: 50, name: "TP-Link WiFi Extender", price: 2299, category: "Networking", stock: 28 }
])

  let [state,setState]= useState({
    name:"", category:"",stock:"",price:"",id:Date.now()
  })

  let handleChange=(e)=>{
    setState({...state, [e.target.name]: e.target.value})
  }


  let handleSubmit=(e)=>{
    e.preventDefault()
    setData([...data,state])
    setState({ name:"", category:"",stock:"",price:"",id:Date.now()})
  }

  let handleDelete= (ID)=>{
   setData( data.filter(obj=> ID != obj.id))
  }

  let handleUpdate = (obj)=>{
    setState({name:obj.name, category:obj.category,stock:obj.stock,price:obj.price,id:obj.id})

    handleDelete(obj.id)
  }


  return (
    <>
  <div className="min-h-screen bg-gray-100 p-6">

    {/* FORM SECTION */}
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={state.name}
          onChange={handleChange}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={state.category}
          onChange={handleChange}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={state.stock}
          onChange={handleChange}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={state.price}
          onChange={handleChange}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <button className="col-span-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200">
          Add Product
        </button>
      </form>
    </div>


    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {data.map((obj) => (
        <div
          key={obj.id}
          className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {obj.name}
            </h3>

            <p className="text-gray-500 text-sm mb-1">
              Category: {obj.category}
            </p>

            <p className="font-medium mb-1">
              ₹ {obj.price}
            </p>

            <p
              className={`text-sm font-semibold ${
                obj.stock > 10
                  ? "text-green-600"
                  : obj.stock > 5
                  ? "text-yellow-500"
                  : "text-red-600"
              }`}
            >
              Stock: {obj.stock}
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-lg text-black" onClick={()=>{handleUpdate(obj)}} >
              Update
            </button>

            <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-white" onClick={()=>{handleDelete(obj.id)}}>
              Delete
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</>

  )
}

export default CURDtask3