import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Math.random(),
      description,
      date,
      priority,
      completed: false,
    };
    onAdd(newTask);
    setDescription('');
    setDate('');
    setPriority('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Deskripcija"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Datum"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type="text"
        placeholder="Prioritet"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

 export default TaskForm;