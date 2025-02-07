// src/App.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './redux/todosSlice';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          id="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button id="add-btn" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
