import React, { useReducer } from 'react'

const Task3 = () => {
  let initial = {
    background: "gray",
    fontSize: "16px",
    color: "black"
  }

  let reducer = (state, action)=>{
    switch (action.prop) {
      case "background":
       return {...state, background: action.value}
        break;
      case "color":
       return {...state, color: action.value}
        break;
      case "fontSize":
       return {...state, fontSize: action.value}
        break;
    
      default:
        break;
    }
  }

  let [state, dispatch] = useReducer(reducer,initial)


    
  return (
    
    <>
<div className="flex justify-center items-center h-screen">
  
  <div className="flex flex-col items-center gap-8 p-8">

    <div
      style={{
        background: state.background,
        fontSize: state.fontSize,
        color: state.color,
      }}
      className="flex items-center justify-center text-center h-[30vh] w-[30vw] p-4 rounded-lg shadow-md"
    >
      Welcome sir, <br />
      This is a prototype of the css toolkit. <br />
      Be free to apply the styling as your choice!
    </div>

    <div className="flex flex-col gap-4">

      <div className="flex items-center gap-4">
        <span className="w-[130px] font-medium">Select Bg:</span>
        <div className="flex gap-4">
          <button onClick={() => dispatch({ prop: "background", value: "Red" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px] hover:bg-red-500 hover:scale-110 transition duration-200">Red</button>
          <button onClick={() => dispatch({ prop: "background", value: "Blue" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px] hover:bg-blue-600 hover:scale-110 transition duration-200 ">Blue</button>
          <button onClick={() => dispatch({ prop: "background", value: "Green" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px] hover:bg-green-600 hover:scale-110 transition duration-200">Green</button>
          <button onClick={() => dispatch({ prop: "background", value: "Yellow" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px] hover:bg-yellow-300 hover:scale-110 transition duration-200">Yellow</button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-[130px] font-medium">Select TxtColr:</span>
        <div className="flex gap-4">
          <button onClick={() => dispatch({ prop: "color", value: "White" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px] hover:bg-white hover:scale-110 transition duration-200">White</button>
          <button onClick={() => dispatch({ prop: "color", value: "Black" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px] hover:bg-black hover:text-amber-50 hover:scale-110 transition duration-200">Black</button>
          <button onClick={() => dispatch({ prop: "color", value: "GreenYellow" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px] hover:bg-amber-200 hover:scale-110 transition duration-200">Neon</button>
          <button onClick={() => dispatch({ prop: "color", value: "Gray" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px] hover:bg-gray-300 hover:scale-110 transition duration-200">Gray</button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-[130px] font-medium">Select FontSize:</span>
        <div className="flex gap-4">
          <button onClick={() => dispatch({ prop: "fontSize", value: "12px" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px]">12px</button>
          <button onClick={() => dispatch({ prop: "fontSize", value: "16px" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px]">16px</button>
          <button onClick={() => dispatch({ prop: "fontSize", value: "18px" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px]">18px</button>
          <button onClick={() => dispatch({ prop: "fontSize", value: "20px" })} className="bg-gray-200 px-4 py-2 rounded-lg h-10 w-[50px]">20px</button>
        </div>
      </div>

    </div>
  </div>

</div>
    
    </>
  )
}

export default Task3