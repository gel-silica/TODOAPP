import React from 'react';

const TodoList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <span onClick={() => onToggleComplete(index)}>{task.text}</span>
          <button onClick={() => onDeleteTask(index)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
