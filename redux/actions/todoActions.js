import { CREATE_TASK, DEL_DB_TASK, DEL_LOCAL_TASK, FETCH_TASK, UPLOAD_TASK } from "../types";

export function createTask(task) {
    return {
        type: CREATE_TASK,
        payload: task
    }
}
export function deleteTask(task) {
    return {
        type: DEL_LOCAL_TASK,
        payload: task
    }
}

export function fetchTasks() {
    return async dispatch => {
        const res = await fetch('http://localhost:4200/tasks?del_ne=true')
        const json = await res.json()
        dispatch({type: FETCH_TASK, payload: json})
    }
}

export function uploadTask(task) {
    return async dispatch => {
        task.del = false
        const res = await postTask(task)
        const result = await res.json()
        dispatch({type: UPLOAD_TASK, payload: task})
        dispatch(deleteTask(task))
    }
}

async function postTask(task) {
    return await fetch('http://localhost:4200/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    });
}

export function deleteDbTask(task) {
    return async (dispatch) => {

        if (!task?.id) return;
        task.del = true
        const res = await fetch(`http://localhost:4200/tasks/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        })
        const result = await res.json()

        dispatch(fetchTasks())
    }
}