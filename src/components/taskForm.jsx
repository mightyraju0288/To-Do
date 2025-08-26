import './taskform.css'
import React, { useState } from "react";
export default function TaskForm(props) {
  const [enteredTask, setEnteredTask] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");
  const onTaskInput = (event) => {
    setEnteredTask(event.target.value);
  };
  const onDateInput = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();

    const taskData = {
      task: enteredTask,
      date: new Date(enteredDate),
    };
    props.onSubmitTask(taskData);
    setEnteredDate(" ");
    setEnteredTask(" ");
  };
  return (
    <div className="task-form">
      <form onSubmit={submitHandle}>
        <div className="task-label">
          <label>Task :</label>
          <input type="text" onChange={onTaskInput} value={enteredTask} />
        </div>
        <div className="date-label">
          <label>Due Date :</label>
          <input type="date" onChange={onDateInput} value={enteredDate} />
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}
