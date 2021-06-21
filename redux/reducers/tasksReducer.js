import { CREATE_TASK, DEL_DB_TASK, DEL_LOCAL_TASK, FETCH_TASK, UPLOAD_TASK } from "../types"

const initialState = {
    localTasks: [
        {
            title: 'Task title',
            body: 'Task body text',
            id: Date.now().toString()
        },
        {
            title: 'Task title 2',
            body: 'Task body text',
            id: Date.now().toString() + 1
        },
        {
            title: 'Task title 3',
            body: 'Task body text',
            id: Date.now().toString() + 2
        },
        {
            title: 'Task title 4',
            body: 'Task body text',
            id: Date.now().toString() + 3
        },
    ],
    fetchedTasks: []
}

export const tasksReducer =  (state = initialState, action) => {
    switch(action.type) {
        case CREATE_TASK:
            return {...state, localTasks: [...state.localTasks, action.payload]}
        case FETCH_TASK:
            return {...state, fetchedTasks: action.payload}
        case UPLOAD_TASK:
            return {...state, fetchedTasks: [...state.fetchedTasks, action.payload]}
        case DEL_LOCAL_TASK:
            let newList = []
            state.localTasks.forEach((task) => {
                if (!(task.id === action.payload.id)) {
                    return newList.push(task)
                }
                // findIndex slice
            })
            return {...state, localTasks: newList}
        default: return state
    }
}