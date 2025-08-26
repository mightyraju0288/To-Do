import './pendingTasks.css'
import TaskItem from "./taskItem";
import { useState } from "react";
import TaskFilter from "./TaskFilter";
export default function PendingTasks(props) {
  const [filteredCategory , setFilteredCategory] = useState("all")
  const deletionHandle = (idToRemove) =>
  {
    console.log(idToRemove);
    props.onDelete(idToRemove);
  }
  const onToggleHandle = (completeId) => 
  {
    console.log(completeId);
    props.taskCompleted(completeId);
  }

  const filterTaskHandle = (selectedCategory) =>
  {
    console.log(selectedCategory);
    setFilteredCategory(selectedCategory);
  }

  const filteredTasks = props.items.filter((task) =>
  {
    if (filteredCategory === "true") return task.completed;
    if (filteredCategory === "false") return !task.completed;
    return true;
  }
   );
  const onEditHandle = (editedTask) => {
    console.log('in pending file')
    console.log(editedTask);
    props.onChangingTask(editedTask);
  };
  return (
    <div className="tasks">
      <TaskFilter filterTask = {filterTaskHandle} selected = {filteredCategory}/>
      <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          task={task.task}
          date={task.date}
          id ={task.id}
          key={task.id}
          onDeletion={deletionHandle}
          onCompletion={onToggleHandle}
          completed={task.completed}
          onEdit={onEditHandle}
        />
      ))}
      </ul>
    </div>
  );
}
