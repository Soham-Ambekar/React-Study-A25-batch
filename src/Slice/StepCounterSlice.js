import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
    name:"StepCounter",
    initialState: 0,
    reducers:{
        inc2:(state,action)=>state+2,
        inc5:(state,action)=>state+5,
        inc10:(state,action)=>state+10,
        res:(state,action)=>slice.getInitialState()
    }
})

export let {inc2,inc5,inc10,res} = slice.actions

export default slice.reducer