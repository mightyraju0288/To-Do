import { useState, useEffect } from "react";
import "./App.css";
import PendingTasks from "./components/pendingTasks";
import NewTasks from "./components/newTasks";

const DUMMY_TASKS = [
  {
    id: "erer",
    date: new Date(2025, 9, 23),
    task: "learn react",
    completed: false,
  },
  {
    id: "ert",
    date: new Date(2025, 9, 28),
    task: "complete the to do website",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks
      ? JSON.parse(storedTasks).map((task) => {
          return { ...task, date: new Date(task.date) };
        })
      : DUMMY_TASKS;
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const taskHandler = (passedData) => {
    console.log("in App");
    setTasks((prevTasks) => {
      return [passedData, ...prevTasks];
    });
  };
  const deleteTaskHandler = (removeId) => {
    console.log(removeId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== removeId));
  };
  const completeToggleHandler = (taskId) => {
    console.log(taskId);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };
  const saveEditHandler = (renewedTask) => {
    console.log("in app file");
    console.log(renewedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === renewedTask.id
          ? {
              ...task,
              task: renewedTask.task,
              date: new Date(renewedTask.date),
            }
          : task
      )
    );
  };
  return (
    <>
      <header className="header">
        <div className="header-bar">
          <h1 className="title">My-To-Do List</h1>
        </div>
        <div className="header-content">
          <p className="subtitle">Organize your tasks efficiently</p>
        </div>
      </header>
      <PendingTasks
        items={tasks}
        onDelete={deleteTaskHandler}
        taskCompleted={completeToggleHandler}
        onChangingTask={saveEditHandler}
      />
      <NewTasks onNewTask={taskHandler} />
    </>
  );
}

export default App;
