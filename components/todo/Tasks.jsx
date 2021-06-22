import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/toolkit/tasksAction";
import Task from "./Task";

export default function Tasks () {

    const dispatch = useDispatch()

    const tasks = useSelector((state) => {
        return state.todo.tasks
    })

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    

    return (
        tasks.map(({id, title, body}) => <Task key={id} title={title} body={body} id={id} isLocal={true} />)
    )
}