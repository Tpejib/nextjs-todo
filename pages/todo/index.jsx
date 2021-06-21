import { MainLayout } from "../../components/MainLayout";
import FetchedTasks from "../../components/todo/FetchedTasks";
import Form from "../../components/todo/Form";
import Tasks from "../../components/todo/Tasks";

export default function Todo() {
    return (
        <MainLayout>
            <div className="row">
                <div className="col mb-5">
                    <h2>Form</h2>
                    <Form />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Local Tasks</h2>
                    <Tasks/>
                </div>
                <div className="col">
                    <h2>Fetched Tasks</h2>
                    <FetchedTasks/>
                </div>
            </div>
        </MainLayout>
    )
}