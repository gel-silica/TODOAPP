import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => (
      i === index ? { ...task, completed: !task.completed } : task
    ));
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todoリスト</h1>
      <InputForm onAddTask={addTask} />
      <TodoList tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
