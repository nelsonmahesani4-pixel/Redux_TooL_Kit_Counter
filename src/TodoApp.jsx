import React, { useState } from "react";
import "./TodoStyle.css";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };
  const EditTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = task;
    setTasks(newTasks);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((item, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo App</h1>

      <input
        className="todo-input"
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="add-btn" onClick={addTask}>
        Add
      </button>
      <button className="edit-btn" onClick={() => EditTask(tasks.length - 1)}>
        Edit Task
      </button>

      {tasks.map((item, index) => (
        <div className="task-item" key={index}>
          <p>{item}</p>

          <button
            className="delete-btn"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;