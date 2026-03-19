import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import Display from './Display'
import Loader from '../CrudTask1/Loader'

const CrudTas = () => {

    let listReducer = (state,action) => {
        switch (action.type) {
            case "AddList":
                return action.payload
                break;
            case "updateList":
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
    
    let [list,dispatchList] = useReducer(listReducer, [] )


    useEffect(()=>{
        axios.get('https://dummyjson.com/quotes').then((res)=>{
            dispatchList({type:"AddList", payload: res.data.quotes})
        })
    }, [])


    let initialObj = {id:Date.now(),quote:"",author:""}

    let objReducer = (state,action)=>{
        switch (action.type) {
            case "Addquote":
                state = {...state, [action.payload.name]:action.payload.value}
                return state;
                break;

            case "emptyObj":
                return action.payload
                break;

            case "update":
                return action.payload
                break;
        
            default:
                break;
        }
    }

    let [obj, dispatchObj] =useReducer(objReducer,initialObj)

    let handleChange = (e)=>{
        dispatchObj({type:"Addquote", payload:e.target})
    }
    
    let handleSubmit = (e)=>{
        e.preventDefault();
        dispatchList({type:"updateList", payload:obj})
        dispatchObj({type:"emptyObj", payload:{...initialObj, id:Date.now()}})
    }

    let handleUpdate = (obj)=>{
        dispatchObj({type:"update", payload: obj })
        handleDelete(obj.id)

    }

    let handleDelete =(id)=>{
        let newList = list.filter(obj=> obj.id != id)
        dispatchList({type:"delete",payload:newList})
    }



  return (
    <>

    <form onSubmit={handleSubmit}>
        <input type="text" name='quote' onChange={handleChange} />
        <input type="text" name='author' onChange={handleChange} />
        <button>Add</button>
    </form>

    <div>
        {
            list.length == 0? <Loader></Loader> : <Display list={list} handleUpdate={handleUpdate} handleDelete={handleDelete} ></Display>
        }
    </div>
    
    
    </>
  )
}

export default CrudTas