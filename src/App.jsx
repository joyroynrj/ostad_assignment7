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
      <h2>Ostad Assignment7  - To-Do List</h2>
      <input type="text" value={task} onChange={handleTaskChange} />
      <button onClick={handleAddTask}>Add Task</button>

      <table className="toDoItemTable">
        <thead>
          <tr>
            <td>Item Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {taskList.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td><button onClick={() => handleDeleteTask(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default TodoList;
