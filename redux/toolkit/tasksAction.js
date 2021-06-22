import tasksSlice, { loadTasks } from "./tasksSlice"

export function fetchTasks() {
    return async dispatch => {
        const res = await fetch('http://localhost:4200/tasks?del_ne=true')
        const json = await res.json()
        dispatch(loadTasks(json))
        console.log('upload');
    }
}

export function postTask(task) {
    task.del = false
    return async dispatch => {
        await fetch('http://localhost:4200/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        })
        dispatch(fetchTasks())
    }
}

export function deleteTask(task) {
    task.del = true
    return async dispatch => {
        await fetch(`http://localhost:4200/tasks/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        })
        dispatch(fetchTasks())
    }
}

export function restoreDeletedTasks() {
    return async dispatch => {
        const res = await fetch('http://localhost:4200/tasks?del_ne=false')
        const json = await res.json()

        const lastTask = json[json.length - 1]

        lastTask.del = false

        await fetch(`http://localhost:4200/tasks/${lastTask.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(lastTask)
        })
        
        dispatch(fetchTasks())
    }
}