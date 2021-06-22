import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        loadTasks(state, {payload}) {
            state.tasks = payload
        },
        // deleteTask(state, {payload}) {
        //     const index = state.tasks.findIndex(({id}) => id === payload.id)
        //     state.tasks.splice(index, 1)
        // }
    }
})

export default tasksSlice.reducer

export const {loadTasks, deleteTask} = tasksSlice.actions