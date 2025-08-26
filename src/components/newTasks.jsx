import './newTasks.css'
import TaskForm from "./taskForm"
export default function NewTasks(props){
    const submitHandler = (enteredTaskData) =>
    {
        const savedTaskData = {
            ...enteredTaskData,
            id : Math.random().toString(),
            completed : false,
        }
        console.log(savedTaskData);
        props.onNewTask(savedTaskData);
    }
    return(
        <div className='new-task'>
            <TaskForm onSubmitTask = {submitHandler}/>
        </div>
    )
}