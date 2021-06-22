import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask, uploadTask } from "../../redux/actions/todoActions";
import { postTask, restoreDeletedTasks } from "../../redux/toolkit/tasksAction";
import { Button } from "./Button";

export default function Form () {

    const initialTaskState = {
        id: Date.now().toString(),
        title: '',
        body: ''
    };
    
    const [task, setTask] = useState(initialTaskState)

    const dispatch = useDispatch()

    const handleInput = ({target:{name, value}}) => {
        setTask({
            ...task,
            [name]: value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        if (task.title === '' || task.body === '') return
        dispatch(createTask(task))
        dispatch(postTask(task))
        setTask({
            title: '',
            body: '',
            id: Date.now().toString()
        })
    }

    const restore = () => {
        dispatch(restoreDeletedTasks())
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label 
                        htmlFor="title" 
                        className="form-label"
                    >
                        Task title
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="Do something..." 
                        name="title"
                        value={task.title}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Task description</label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3" 
                        placeholder="Learn php..." 
                        value={task.body}
                        onChange={handleInput} 
                        name="body"
                        >

                    </textarea>
                </div>
                <Button 
                    type="submit"
                    className="btn-primary"
                >
                    Post new Task
                </Button>
            </form>
            <Button
                className="btn-warning"
                onClick={restore}
            >
                Restore Last Deleted Tasks
            </Button>
            {/* {JSON.stringify(task, null, 2)} */}
        </>
    )
}