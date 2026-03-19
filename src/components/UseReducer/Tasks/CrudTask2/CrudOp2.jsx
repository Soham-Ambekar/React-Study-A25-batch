import React, { useReducer } from 'react'
import Display from './Display'
import Loader from '../CrudTask1/Loader'

const CrudOp2 = () => {
  
  let initialObj = {id:Date.now(), username:"", password:""}   
  let objReducer = (state,action)=>{
    switch (action.type) {
      case "newUser":
        state = {...state, [action.payload.name]: action.payload.value}
        return state
        break;
      
      case "emptyobj":
        return action.payload
        break;

      case "update":
        return action.payload
        break;

      default:
        break;
    }
  }


  let [obj,dispatchObj] = useReducer(objReducer,initialObj)


  
  let initialList =[]
  let listReducer = (state,action)=>{
    switch (action.type) {
      case "AppendList":
        state = [...state, action.payload]
        return state
        break;

      case "delete":
        return action.payload
        break;
  
      default:
        break;
    }
  }




  let [list,listDispatch] = useReducer(listReducer,initialList)


   let handleChange = (e)=>{
    dispatchObj({type: "newUser", payload: e.target})
   }

   let handleSubmit = (e)=>{
    e.preventDefault();
    listDispatch({type:"AppendList", payload:obj})
    dispatchObj({type:"emptyobj", payload:{...initialObj, id: Date.now()}})

   }


   let handleUpdate=(obj)=>{
    dispatchObj({type:"update", payload:obj})
    handleDelete(obj.id)


   }

   let handleDelete=(id)=>{
    let newlist = list.filter(obj=> obj.id !== id )
    listDispatch({type:"delete", payload: newlist})
   }



  return (
   <>
   <form action="" onSubmit={handleSubmit}>
    <input type="text" name='username' value={obj.username} onChange={handleChange} />
    <input type="text" name='password' value={obj.password} onChange={handleChange} />
    <button>Add</button>
   </form>

   <div>
    {list.length == 0 ? <Loader></Loader>: <Display list={list} handleDelete={handleDelete} handleUpdate={handleUpdate} ></Display>}
   </div>
   </>
  )
}

export default CrudOp2