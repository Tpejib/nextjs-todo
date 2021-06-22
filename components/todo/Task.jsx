import { useDispatch } from "react-redux"
import { deleteTask } from "../../redux/toolkit/tasksAction";
// import { deleteDbTask, fetchTasks, uploadTask } from "../../redux/actions/todoActions";
import { Button } from "./Button";
import { Card } from "./Card";
// import { deleteTask } from '../redux/toolkit/toolkitSlice'


export default function Task({title, body, id, isLocal}) {


    const dispatch = useDispatch()

    const task = {
        id,
        title,
        body
    }

    const deleteButton = () => {
        console.log('123');
        dispatch(deleteTask(task))
    }
   
    return (
        <Card 
            className="mt-2"
            title={title}
            body={body}
        >
            {/* {isLocal && 
                <Button
                    className="btn-success"
                    // onClick={onClick}
                >
                    Upload
                </Button>
            } */}
            <Button
                className="btn-danger"
                onClick={deleteButton}
                >
                Del
            </Button>
        </Card>
    )
}