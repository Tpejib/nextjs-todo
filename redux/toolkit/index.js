import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";


const rootReducer = {
    todo: tasksSlice
}

export const store = configureStore({
    reducer: rootReducer
})