import { useSelector } from "react-redux";
import Task from "./Task";

export default function Tasks () {
    const tasks = useSelector((state) => {
        return state.tasks.localTasks
    })
    return (
        tasks.map(({id, title, body}) => <Task key={id} title={title} body={body} id={id} isLocal={true} />)
    )
}