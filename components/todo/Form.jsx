import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask, uploadTask } from "../../redux/actions/todoActions";
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
        setTask({
            title: '',
            body: '',
            id: Date.now().toString()
        })
    }

    const onUpload = () => {
        const fakeTask = {
            id: Date.now().toString(),
            title: 'Fake task ' + Date.now().toString(36),
            body: 'Fake task body'

        }
        console.log(fakeTask);
        dispatch(uploadTask(fakeTask))
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
                onClick={onUpload}
                className="btn-warning"
            >
                Upload Task to DB
            </Button>

            {/* {JSON.stringify(task, null, 2)} */}
        </>
    )
}