import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
    name:"Counter",
    initialState: 0,
    reducers: {
        inc: (state,action)=>state+1,
        dec: (state,action)=>state-1,
        inc5: (state,action)=>state+action.payload,
        reset: (state,action)=>slice.getInitialState()
    }
})

export let {inc,dec,inc5,reset} = slice.actions

export default slice.reducer