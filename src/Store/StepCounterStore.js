import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "../Slice/StepCounterSlice"

export let StepStore = configureStore({
    reducer: stepReducer
})
