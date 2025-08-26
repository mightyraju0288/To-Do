import './taskItem.css'
import TaskDate from './TaskDate'; 
export default function TaskItem(props) {
  const toggleHandle = () =>
  {
    props.onCompletion(props.id);
  }
  const clickHandle = () => {
    props.onDeletion(props.id);
  };
  const editHandle = () =>
  {
    const taskName = prompt("Enter the edited task name");
    const taskDate = prompt("Enter the date (YYYY-MM-DD):");
    const editedTask = {
      id: props.id,
      task: taskName,
      date: new Date(taskDate),
      completed: props.completed,
    };
    props.onEdit(editedTask);
  }
  return (
    <>
        <li className="item">
          <input
            type="checkbox"
            checked={props.completed}
            onChange={toggleHandle}
            className="checkbox"
          />
          <span className="text">{props.task}</span>
          <button className="del-btn" onClick={clickHandle}>
            Delete
          </button>
          <button className = "edit-btn" onClick = {editHandle}>Edit</button>
          <TaskDate date={props.date}/>
        </li>
    </>
  );
}
