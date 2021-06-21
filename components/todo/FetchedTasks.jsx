import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/actions/todoActions";
import Task from "./Task";

export default function FetchedTasks () {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => {
        return state.tasks.fetchedTasks
    })
    useEffect(() => {
        dispatch(fetchTasks())
    }, [])
    return (
        tasks.map(({id, title, body}) => <Task key={id} title={title} body={body} id={id} isLocal={false} />)
    )
}