import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task-item">
      <h3 className="description">{task.description}</h3>
      <p className="date">{task.date}</p>
      <p className="priority">{task.priority}</p>
      <button className=".complete" onClick={() => onToggle(task.id)}>
        {task.completed ? 'Undo' : 'Done'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};
  export default TaskItem;