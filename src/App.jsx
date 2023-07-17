import React, { useState } from 'react';
import './app.css'

function TodoList() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  return (
    <div className="toDoList">
      <h2>To-Do List</h2>
      <input type="text" value={task} onChange={handleTaskChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
