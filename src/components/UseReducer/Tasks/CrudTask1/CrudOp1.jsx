import React, { useReducer } from "react";
import Loader from "./Loader";
import Display from "./Display";

const CrudOp1 = () => {
  let initialObj = { username: "", password: "", id: Date.now() };

  let reducerObj = (state,action) => {
    switch (action.key) {
      case "geneUser":
        state= {...state, [action.payload.name]: action.payload.value}
        return state
        break;

      case "emptyObj":
        state =  {username:"",password:"",id:Date.now()}
        return state
        break;

      case "updateObj":
        return action.payload
        break;

         default:
          return state;
        break;
    }
  };

  let [obj, objDispatch] = useReducer(reducerObj, initialObj);



  let initialList = [];
  let reducerList = (state,action) => {
    switch (action.key) {
      case "addUser":
        state = [...state,action.payload]
        return state
         break;

        case "deleteobj":
          return action.payload
          break; 
    
      default:
        return state
        break;
    }
  };

  let [list, listDispatch] = useReducer(reducerList, initialList);

  let handleChange=(e)=>{
    objDispatch({key: "geneUser", payload: e.target})
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    listDispatch({key:"addUser",payload:obj})
    objDispatch({ key:"emptyObj", payload:{}})
  }

 
  let handleDelete = (id)=>{
    let newlist= list.filter(user=> user.id !== id)
    listDispatch({key:"deleteobj", payload:newlist})
  }
  let handleUpdate = (user)=>{
    objDispatch({key:"updateObj",payload:user})
    handleDelete(user.id)
  }



  return (
    <>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="username" value={obj.username} onChange={handleChange} />
        <input type="text" name="password" value={obj.password}  onChange={handleChange} />
        <button>Add user</button>
      </form>


      <div>
        {
          list.length == 0? <Loader></Loader> : <Display list={list} handleUpdate = {handleUpdate} handleDelete = {handleDelete} ></Display>
        }


      </div>
    </>
  );
};

export default CrudOp1;
