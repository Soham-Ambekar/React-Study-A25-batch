import React, { useReducer } from 'react'
import Display from './Display'
import Loader from '../CrudTask1/Loader'

const CrudOp3 = () => {
    let initialList = []

    let listReducer =(state,action)=>{
        switch (action.type) {
            case 'appendList':
                state = [...state, action.payload]
                return state
                break;

            case 'delete':
                return action.payload
                break;
        
            default:
                break;
        }
    }
  
    let [list,dispatchList] = useReducer(listReducer, initialList)




    let initialUser = {id:Date.now(), username:"",password:""}

    let userReducer = (state,action)=>{
        switch (action.type) {
            case 'addUser':
                state = {...state, [action.payload.name]: action.payload.value}
                return state
                break;
            case 'emptyUser':
                return action.payload
                break;

            case 'updateUser':
                return action.payload
                break;
  
        
            default:
                break;
        }
    }
    let [user, dispatchUser] = useReducer(userReducer, initialUser)



    
    let handleChange = (e)=>{
        dispatchUser({type:"addUser", payload: e.target})
    }
    
    
    let handleSubmit = (e)=>{
        e.preventDefault()
        dispatchList({type:"appendList",payload: user})
        dispatchUser({type: "emptyUser" , payload: {...initialUser, id: Date.now()}})
    }
    
    let handleDelete = (id)=>{
      let   newList = list.filter(obj=> obj.id !== id)
        dispatchList({type:'delete', payload: newList})
    }
    
    
        let handleUpdate = (obj)=>{
            dispatchUser({type:"updateUser", payload: obj})
            handleDelete(obj.id)
    
        }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name='username' value={user.username} onChange={handleChange} />
        <input type="text"  name='password' value={user.password} onChange={handleChange}/>
        <button>Add</button>
    </form>

    <div>
        {
            list.length == 0 ? <Loader></Loader> : <Display list={list} handleDelete={handleDelete} handleUpdate={handleUpdate}></Display>
        }
    </div>
    
    
    </>
  )
}

export default CrudOp3