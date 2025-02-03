// App.jsx (or App.js)
import React, { useReducer, useRef, useEffect } from 'react';
import TodoContext from './TodoContext';
import todoReducer from './todoReducer';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  const inputRef = useRef(null);

  const handleAddTodo = () => {
    if (inputRef.current.value) {
      dispatch({ type: 'ADD_TODO', payload: inputRef.current.value });
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Todo List</h1>
        <input ref={inputRef} type="text" placeholder="Add a new task" />
        <button onClick={handleAddTodo}>Add</button>
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default App;