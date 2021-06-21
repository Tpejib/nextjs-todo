import { useDispatch } from "react-redux"
import { deleteDbTask, deleteTask, fetchTasks, uploadTask } from "../../redux/actions/todoActions";
import { Button } from "./Button";
import { Card } from "./Card";


export default function Task({title, body, id, isLocal}) {

    const dispatch = useDispatch()

    const task = {
        id,
        title,
        body
    }

    const onClick = () => {
        dispatch(uploadTask(task))
    }

    const delTask = () => {
        isLocal ? dispatch(deleteTask(task)) : dispatch(deleteDbTask(task))
    }
   
    return (
        <Card 
            className="mt-2"
            title={title}
            body={body}
        >
            {isLocal && 
                <Button
                    className="btn-success"
                    onClick={onClick}
                >
                    Upload
                </Button>
            }
            <Button
                className="btn-danger"
                onClick={delTask}
            >
                Del
            </Button>
        </Card>
    )
}