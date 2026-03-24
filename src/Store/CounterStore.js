import { configureStore } from "@reduxjs/toolkit";
import Sreducer from "../Slice/CounterSlice"

export let store = configureStore({
    reducer: Sreducer
})

